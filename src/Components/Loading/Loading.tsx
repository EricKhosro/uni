import CircularProgress from "@mui/material/CircularProgress";

interface ILoadingProps {
  size?: number;
  className?: string;
}

const Loading = ({ size = 20, className }: ILoadingProps) => {
  return <CircularProgress size={size} className={className} />;
};

export default Loading;
