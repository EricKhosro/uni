import PaginationItem from "@mui/material/PaginationItem";
import { Pagination as MuiPagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LeftArrow from "../Assets/Icons/LeftArrow";

interface IPagination {
  pageSize?: number;
  count?: number;
  onChange: (pageSize: number) => void;
  pageCount: number;
  currentPage: number;
}

const Pagination = ({
  pageSize = 0,
  count = 0,
  pageCount,
  onChange,
  currentPage,
}: IPagination) => {
  const changeHandler = (e: any, p: number) => {
    if (p === currentPage) return;
    onChange(p);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const theme = createTheme({ direction: "rtl" });

  if (count <= pageSize) return <div className="h-min mt-10"></div>;

  return (
    <div className="flex flex-row justify-start items-center gap-4" dir="rtl">
      <div
        className={`flex flex-row justify-start items-center ${
          currentPage === 1
            ? "text-gray3 cursor-not-allowed"
            : "text-on-surface cursor-pointer"
        }`}
        onClick={() => changeHandler({}, currentPage - 1)}
      >
        <LeftArrow className="rotate-180" />
        <div className="title-small">قبل</div>
      </div>
      <ThemeProvider theme={theme}>
        <MuiPagination
          count={pageCount}
          onChange={changeHandler}
          page={currentPage}
          renderItem={(item) => <PaginationItem {...item} />}
          hideNextButton
          hidePrevButton
          className="title-small"
        />
      </ThemeProvider>
      <div
        className={`flex flex-row justify-start items-center ${
          currentPage === pageCount
            ? "text-gray3 cursor-not-allowed"
            : "text-on-surface cursor-pointer"
        } `}
        onClick={() => changeHandler({}, currentPage + 1)}
      >
        <div className="title-small">بعد</div>
        <LeftArrow />
      </div>
    </div>
  );
};

export default Pagination;
