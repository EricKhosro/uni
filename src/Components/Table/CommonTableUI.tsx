import { ClickAwayListener, Popover, TableCell, TableRow } from "@mui/material";
import Table from "./Table";
import {
  AdditionalColPlacement,
  Header,
  IAdditional,
  ITablePopupProps,
  ITableReport,
  ITableUI,
} from "Interfaces/Components-Interfaces/tableInterfaces";
import Cell from "./Cell";
import { Fragment, useState } from "react";
import MoreVertIcon from "Assets/Icons/MoreVertIcon";

export const CommonTableUI = <TRow extends ITableReport>({
  reports,
  AdditionalBody,
  onAction,
  popupUI,
  AdditionalFirstRow,
  hideNoResMsg,
  className,
}: ITableUI<TRow>) => {
  const GetRow = <TRow extends ITableReport>({
    headers,
    index,
    row,
    AdditionalBody,
    onAction,
    PopupUI,
  }: {
    headers: Header[];
    row: TRow;
    index: number;
    AdditionalBody?: IAdditional<TRow>[] | null;
    onAction?: () => void;
    PopupUI?: (props: ITablePopupProps<TRow>) => JSX.Element;
  }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    if (!headers || !headers.length) return;

    const clonedRow = JSON.parse(JSON.stringify(row));
    const r: JSX.Element[] = [];
    headers.forEach((theader) => {
      const additional = AdditionalBody
        ? AdditionalBody?.find((a) => a.colNumber - 1 === r.length)
        : null;
      r.push(
        <>
          {onAction &&
          additional &&
          additional.placement === AdditionalColPlacement.Right ? (
            additional.getCol({ row, onAction })
          ) : (
            <></>
          )}
          <TableCell key={theader.headerName}>
            <Cell
              clonedRow={clonedRow}
              headerName={theader.headerName}
              type={theader.typeStr}
            />
          </TableCell>
          {onAction &&
          additional &&
          additional.placement === AdditionalColPlacement.Left ? (
            additional.getCol({ row, onAction })
          ) : (
            <></>
          )}
        </>
      );
    });

    return (
      <TableRow
        key={index}
        className={`!cursor-pointer 
          ${index % 2 === 1 ? "!bg-background" : "!bg-white"}
          `}
      >
        {r}
        {PopupUI && onAction ? (
          <TableCell>
            <div onClick={(e) => e.stopPropagation()}>
              <ClickAwayListener
                onClickAway={(e) => {
                  e.stopPropagation();
                  setIsPopupOpen(false);
                }}
              >
                <>
                  <div
                    aria-describedby="simple-popover"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPopupOpen(true);
                      setAnchorEl(e.currentTarget);
                    }}
                  >
                    <MoreVertIcon className="text-grayText w-6 h-6 cursor-pointer hover:bg-opacity-0.08 rounded-full transition-all duration-150" />
                  </div>
                  {isPopupOpen ? (
                    <Popover
                      id="simple-popover"
                      open={isPopupOpen}
                      anchorEl={anchorEl}
                      onClose={() => {
                        setIsPopupOpen(false);
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      dir="rtl"
                    >
                      <div className="w-32 flex flex-col justify-start items-center p-1">
                        {<PopupUI row={row} onAction={onAction} />}
                      </div>
                    </Popover>
                  ) : (
                    <></>
                  )}
                </>
              </ClickAwayListener>
            </div>
          </TableCell>
        ) : (
          <></>
        )}
      </TableRow>
    );
  };

  const header = <TRow extends ITableReport>({
    headers,
    reports,
    AdditionalBody,
    PopupUI,
  }: {
    headers: Header[];
    AdditionalBody?: IAdditional<TRow>[] | null;
    reports: TRow[];
    PopupUI?: (props: ITablePopupProps<TRow>) => JSX.Element;
  }) => {
    const r = (
      <>
        {headers &&
          headers.length &&
          headers.map((theader, index) => {
            const additional = AdditionalBody
              ? AdditionalBody?.find((a) => a.colNumber - 1 === index)
              : null;
            return (
              <Fragment key={index}>
                {additional &&
                additional.placement === AdditionalColPlacement.Right ? (
                  additional.getHeader({
                    rows: reports,
                  })
                ) : (
                  <></>
                )}
                <TableCell key={theader.headerName}>
                  {theader.translateHeaderName}
                </TableCell>
                {additional &&
                additional.placement === AdditionalColPlacement.Left ? (
                  additional.getHeader({ rows: reports })
                ) : (
                  <></>
                )}
              </Fragment>
            );
          })}
        {popupUI ? <TableCell /> : <></>}
      </>
    );

    return <>{r}</>;
  };

  const tableRowClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  const body = (
    <>
      {AdditionalFirstRow ? AdditionalFirstRow() : <></>}
      {reports && reports.translatedHeaders && reports.report.length ? (
        reports.report.map((row) => {
          return (
            <>
              {GetRow({
                headers: reports.translatedHeaders,
                index: row.row,
                row,
                AdditionalBody,
                onAction,
                PopupUI: popupUI,
              })}
            </>
          );
        })
      ) : (
        <>
          {!hideNoResMsg ? (
            <TableRow className="!relative h-10 !w-full">
              <TableCell className="!w-full !m-auto !flex !justify-center !items-center !h-full !absolute py-[10px]">
                موردی یافت نشد
              </TableCell>
            </TableRow>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
  if (!reports) return null;
  return (
    <div className={`w-full mx-auto shadow-4 rounded overflow-x-auto`}>
      <Table
        header={header({
          headers: reports.translatedHeaders,
          reports: reports.report,
          AdditionalBody,
          PopupUI: popupUI,
        })}
        body={body}
        className={className + " main-table"}
      />
    </div>
  );
};
