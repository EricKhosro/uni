export interface Header {
  headerName: string;
  translateHeaderName: string;
  iconAddr?: string;
  classname?: string;
  typeStr?: string;
  positionTypeStr?: string;
}

export interface ITableReport {
  id: number;
  row: number;
}
export interface ISearchParameters {}

export interface Report<T extends ITableReport> {
  count?: number;
  offset?: number;
  pageSize?: number;
  report: Array<T>;
  translatedHeaders: Array<Header>;
}

export enum AdditionalColPlacement {
  Right = 1,
  Left,
}

export interface IAdditional<RowType extends ITableReport> {
  getHeader: React.FC<{}>;
  getCol: React.FC<{ row: RowType; onAction: () => void }>;
  colNumber: number;
  placement: AdditionalColPlacement;
}
export interface ITableUI<ReportType extends ITableReport> {
  AdditionalFirstRow?: () => JSX.Element;
  reports: Report<ReportType>;
  AdditionalBody?: IAdditional<ReportType>[] | null;
  onAction?: () => void;
  popupUI?: (props: ITablePopupProps<ReportType>) => JSX.Element;
  hideNoResMsg?: boolean;
  className?: string;
}

export interface IAdditionalColProps<T extends ITableReport> {
  row: T;
  onAction: () => void;
}

export interface ITable<
  SearchParam extends ISearchParameters,
  ReportType extends ITableReport
> {
  searchParameters: SearchParam;
  getDataTable: (
    searchParameters: SearchParam,
    offset: number | null,
    pageSize: number | null,
    sortParam: string | null
  ) => Promise<Report<ReportType>>;
  TableUI?: React.FC<ITableUI<ReportType>>;
  refreshTableTime?: number;
  pagesize?: number;
  extraUI?: (reports?: Report<ReportType>) => JSX.Element;
}

export interface ITableBody<ReportType extends ITableReport> {
  isLoading: boolean;
  response?: Report<ReportType>;
  TableUI?: React.FC<ITableUI<ReportType>>;
  reload: () => void;
  onPageChange: (p: number) => void;
  currentPage: number;
}

export interface ISearchparamUI<SearchParam extends ISearchParameters> {
  intialValue: SearchParam;
  onSubmit: (searchparm: SearchParam) => void;
}

export interface IFormSearchParam<SearchParam extends ISearchParameters> {
  onChange: (name: string, value: any) => void;
  searchParam: SearchParam;
  onSubmit: () => void;
  children?: React.ReactElement;
}
export interface ISearchparamUIWithHandler<
  SearchParam extends ISearchParameters
> extends ISearchparamUI<SearchParam> {
  Form: (props: IFormSearchParam<SearchParam>) => any;
  autoSubmit?: boolean;
}

export interface ITablePopupProps<T> {
  onAction: () => void;
  row: T;
}
