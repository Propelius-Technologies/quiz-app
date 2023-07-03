import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { circularProgressBox, ProgressText } from "./styles";
import { useRouter } from "next/router";
import { Danger, Primary_Green } from "@/src/theme/colors";
import useStore from "@/src/zustand-store";

function CircularProgressWithLabel(props: {
  value: number;
  timeLimit: number;
}) {
  console.log("timeLinmit", Math.round((props.value / props.timeLimit) * 100));
  let time = Math.round((props.value / props.timeLimit) * 100);
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        sx={{
          color:
            Math.round((props.value * 60) / 100) > 10 ? Primary_Green : Danger,
        }}
        variant="determinate"
        value={time}
      />
      <Box sx={circularProgressBox}>
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={ProgressText}
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}

export interface CircularStaticProps {
  onClick: () => void;
  timeLimit: number;
}

export default function CircularStatic({
  onClick,
  timeLimit,
}: CircularStaticProps) {
  const { query: questionid } = useRouter();
  const [progress, setProgress] = React.useState(timeLimit);

  const setSelectedAns = useStore((state) => state.setSelectedAnswer);

  const setTimeTaken = useStore((state) => state.setTimeTaken);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(timer); // Stop the timer

          onClick();
          return 0; // Set progress to 0
        } else {
          // if (timeLimit) {
          console.log("datatime", prevProgress);
          setTimeTaken(timeLimit - prevProgress);
          // }
          if (prevProgress === 1) {
            setSelectedAns("1");
          }
          return prevProgress - 1; // Decrement progress
        }
      });
    }, 1000);
    setProgress(timeLimit);
    return () => {
      clearInterval(timer);
    };
  }, [questionid, timeLimit]);

  return <CircularProgressWithLabel value={progress} timeLimit={timeLimit} />;
}
