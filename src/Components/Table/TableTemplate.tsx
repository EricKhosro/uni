import {
  ISearchParameters,
  ITable,
  ITableReport,
  Report,
} from "Interfaces/Components-Interfaces/tableInterfaces";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TableBody from "./TableBody";
import { errorHandler } from "Utilities/errorHandler";

const TableTemplate = <
  SearchParam extends ISearchParameters,
  ReportType extends ITableReport
>({
  getDataTable,
  TableUI,
  refreshTableTime,
  pagesize = 20,
  searchParameters,
  extraUI,
}: ITable<SearchParam, ReportType>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<Report<ReportType>>();

  const [offset, setOffset] = useState<number>(0);
  let isSending = false;

  useEffect(() => {
    setOffset(0);

    fetchData(0);

    if (refreshTableTime) {
      const intervalId = setInterval(() => {
        fetchData();
      }, refreshTableTime);
      return () => clearInterval(intervalId);
    }
  }, [searchParameters]);

  const fetchData = (o = offset) => {
    if (isSending) return;
    setIsLoading(true);
    getDataTable(searchParameters, o, pagesize, "id_desc")
      .then((res: Report<ReportType>) => {
        setResponse(res);
      })
      .catch(errorHandler)
      .finally(() => {
        isSending = false;
        setIsLoading(false);
      });
  };

  const onPageChange = (p: number) => {
    const ps = pagesize;
    const off = (p - 1) * ps;
    fetchData(off);
    setOffset(off);
  };

  return (
    <div className="flex flex-col justify-normal items-center gap-8 w-full">
      {extraUI ? extraUI(response) : <></>}
      <TableBody<ReportType>
        isLoading={isLoading}
        TableUI={TableUI}
        onPageChange={onPageChange}
        reload={fetchData}
        response={response}
        currentPage={offset / pagesize + 1}
      />
    </div>
  );
};

export default TableTemplate;
