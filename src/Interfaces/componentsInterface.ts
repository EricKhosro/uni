export interface IStep {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface IStepperProps {
  image: string;
  steps: IStep[];
  activeStep: number;
}

export interface DropdownItem {
  id: number | string;
  name: string;
  additional?: any;
}

export interface StaticDropdownProps {
  name: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  options: Array<DropdownItem>;
  value?: number | string | null;
  onChange: (name: string, value: number | string | null) => void;
  hiddenClearAll?: boolean;
  disableSearch?: boolean;
}

export interface DynamicDropdownProps {
  sensitiveData?: number | string | null;
  name: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  getData: (
    sensitiveData?: number | string | null | undefined
  ) => Promise<Array<DropdownItem>>;
  value?: number | string | null | undefined;
  onChange: (name: string, value: number | string | null) => void;
  hiddenClearAll?: boolean;
}

export interface DynamicMultiSelectDropdownProps {
  sensitiveData?: number | string | undefined | null;
  name: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  getData: (
    sensitiveData?: number | string | string | null | undefined
  ) => Promise<Array<DropdownItem>>;
  value?: Array<number | string>;
  onChange: (name: string, value: Array<number | string>) => void;
}

export interface CustomStaticDropdownProps<T extends DropdownItem> {
  name: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  value?: string | number | null;
  onChange: (name: string, value: T | null) => void;
  options: T[];
  loading?: boolean;
  hiddenClearAll?: boolean;
  disableSearch?: boolean;
}

export interface ICommonFormTemplateProps {
  title: string;
  desc: string;
  icon: JSX.Element;
  form: JSX.Element;
}

export interface CustomDynamicDropdownProps<T extends DropdownItem> {
  inputId?: number | undefined | null;
  name: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  hiddenClearAll?: boolean;
  disableSearch?: boolean;
  getData: (inputId?: number | null | undefined) => Promise<Array<T>>;
  value: string | number | null;
  onChange: (name: string, value: T | null) => void;
  sendOptionsOnValueChange?: (options: Array<T>) => void;
}
