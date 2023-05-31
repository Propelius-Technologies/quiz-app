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

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
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
        {...props}
      />
      <Box sx={circularProgressBox}>
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={ProgressText}
        >{`${Math.round((props.value * 60) / 100)}`}</Typography>
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
  const [progress, setProgress] = React.useState(10);

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
          setTimeTaken(Math.round((prevProgress * timeLimit) / 100));
          // }
          if (prevProgress === 1) {


            setSelectedAns("1");
          }
          return prevProgress - 1; // Decrement progress
        }
      });
    }, 640);
    setProgress(10);
    return () => {
      clearInterval(timer);
    };
  }, [questionid, timeLimit]);

  return <CircularProgressWithLabel value={progress} />;
}
