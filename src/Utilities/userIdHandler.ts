export const setUserId = (userId: string) => {
  localStorage.setItem("userId", userId);
};
export const getUserId = () => localStorage.getItem("userId");
