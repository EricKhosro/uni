import {
  ITableBody,
  ITableReport,
} from "Interfaces/Components-Interfaces/tableInterfaces";
import FullScreenLoading from "../Loading/FullScreenLoading";
import { CommonTableUI } from "./CommonTableUI";
import Pagination from "Components/Pagination";

const TableBody = <ReportType extends ITableReport>({
  isLoading,
  response,
  reload,
  TableUI,
  onPageChange,
  currentPage,
}: ITableBody<ReportType>) => {
  return isLoading ? (
    <FullScreenLoading />
  ) : response && response.translatedHeaders && response.report ? (
    <div className="flex flex-col justify-start items-center gap-10 w-full">
      <div className="w-full overflow-auto">
        {TableUI ? (
          <TableUI reports={response} onAction={reload} />
        ) : (
          <CommonTableUI reports={response} />
        )}
      </div>

      {response.count && response.pageSize ? (
        <Pagination
          pageCount={Math.ceil(response.count / response.pageSize)}
          currentPage={currentPage}
          count={response?.count}
          pageSize={response?.pageSize}
          onChange={onPageChange}
        />
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div>متاسفانه داده ای یافت نشد</div>
  );
};

export default TableBody;
