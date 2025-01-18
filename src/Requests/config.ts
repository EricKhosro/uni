export const apiAddress = (): string => {
  if (process.env.NODE_ENV === "development") return "http://localhost:5143";
  return "";
};
