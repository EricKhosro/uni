import axios from "axios";
import { apiAddress } from "./config";
import { getToken } from "../Utilities/tokenHandler";
import { getUserId } from "../Utilities/userIdHandler";
import {
  ISearchParameters,
  ITableReport,
  Report,
} from "Interfaces/Components-Interfaces/tableInterfaces";

axios.defaults.headers.common["Authorization"] = getToken();
export const pageSizeMaxValue = 10000000;
export const getRequest = async <Response>(url: string): Promise<Response> => {
  const baseUrl = await apiAddress();

  const res = await axios.get(baseUrl + url, {
    headers: {
      Authorization: getToken(),
    },
  });
  return res.data;
};

export const postRequest = async <Body, Response>(
  url: string,
  body: Body
): Promise<Response> => {
  const baseUrl = await apiAddress();
  const res = await axios.post(baseUrl + url, body, {
    headers: {
      Authorization: getToken(),
    },
  });
  return res.data;
};

export const patchRequest = async <Body, Response>(
  url: string,
  body: Body
): Promise<Response> => {
  const baseUrl = await apiAddress();

  const res = await axios.patch(baseUrl + url, body, {
    headers: {
      Authorization: getToken(),
    },
  });
  return res.data;
};

export const deleteRequest = async <Body, Response>(
  url: string,
  body?: Body
): Promise<Response> => {
  const baseUrl = await apiAddress();

  if (!body) {
    const res = await axios.delete(baseUrl + url, {
      headers: {
        Authorization: getToken(),
      },
    });
    return res.data;
  }
  const res = await axios.delete(baseUrl + url, {
    headers: {
      Authorization: getToken(),
    },
    data: body,
  });
  return res.data;
};

export const getTable = async <
  ISeachParam extends ISearchParameters | null,
  IReport extends ITableReport
>(
  url: string,
  searchParam: ISeachParam | null,
  offset: number | null,
  pageSize: number | null,
  sortingType: string | null
): Promise<Report<IReport>> => {
  const res = await axios.post(
    apiAddress() +
      `${url}?sortingType=${sortingType}&Offset=${offset}&Pagesize=${pageSize}`,
    searchParam,
    {
      headers: {
        Authorization: getToken(),
      },
    }
  );
  return res.data;
};

export const postGetRequest = async <Body, Response>(
  url: string,
  postBody: Body
): Promise<Response> => {
  const sendGetRequest = (reqId: number): Promise<Response> =>
    getRequest<Response>(url + `?reqId=${reqId}`).then((res) => {
      if (res) {
        return res;
      } else {
        // Retry the request with a delay (e.g., 1 second)
        return new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
          sendGetRequest(reqId)
        );
      }
    });

  try {
    const resp = await postRequest<Body, number>(url, {
      ...postBody,
      UserIdentity: getUserId(),
    });

    return await sendGetRequest(resp);
  } catch (e) {
    // Handle the error as needed
    console.error("Error:", e);
    throw e;
  }
};

export const fileDownloader = async (url: string): Promise<string> => {
  const baseUrl = await apiAddress();

  const res = await axios({
    url: `${baseUrl}${url}`,
    method: "GET",
    responseType: "blob",
    headers: {
      Authorization: localStorage.getItem("tspToken"),
    },
  });
  return res.data;
};
