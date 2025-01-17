export interface IRequiredFieldsChecker {
  name: string;
  checker: (value?: any) => boolean;
}
