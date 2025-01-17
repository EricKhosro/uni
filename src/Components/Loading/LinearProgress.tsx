import { LinearProgress as Progress } from "@mui/material";

interface IProps {
  value: number;
  label: string;
}

const LinearProgress = ({ label, value }: IProps) => {
  return (
    <div className="flex flex-row justify-start items-center gap-1">
      <label className="text-confirm text-hint">{label}</label>
      <Progress
        sx={{
          width: "80px",
          height: "4px",
          borderRadius: "4px",
        }}
        variant="determinate"
        value={value}
      />
    </div>
  );
};

export default LinearProgress;
