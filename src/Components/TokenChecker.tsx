import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

const TokenChecker = ({ children }: IProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!checkTokenValidation()) navigate("/");
  // }, [location]);
  return <>{children}</>;
};

export default TokenChecker;
