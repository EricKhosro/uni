import { toast } from "react-toastify";

export const errorHandler = (error?: any) => {
  console.log({ error });

  if (!error) {
    toast.error("خطا در برقراری ارتباط");
    return;
  } else if (error.response && error.response.data && error.response.data.msg) {
    toast.error(error.response.data.msg);
    return;
  } else if (
    (error.response && error.response.status === 401) ||
    error.code === "ERR_NETWORK"
  ) {
    // window.location.pathname = "/";
    return;
  } else if (error.response.data.value) toast.error(error.response.data.value);
  else if (error.response.status === 500) toast.error("خطا داخلی");
  else if (error && error.message) toast.error(error.message);
  else toast.error("خطا");
};
