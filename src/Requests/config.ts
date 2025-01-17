export const apiAddress = (): string => {
  // if (process.env.NODE_ENV === "development") return "http://localhost:5000";
  if (process.env.NODE_ENV === "development") return "http://10.12.7.45:8097";
  return "";
};
