import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { barStyle } from "./barStyle";

interface IProps {
  progress: number;
}
const ProgressBar = ({ progress }: IProps) => {
  return (
    <div>
      <div style={{ padding: "5rem" }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles(barStyle(progress))}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
