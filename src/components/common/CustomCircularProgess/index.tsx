import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { circularProgressBox, ProgressText } from "./styles";

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
      <CircularProgress variant="determinate" {...props} />
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

export default function CircularStatic({ activeStep }: { activeStep: number }) {
  const [progress, setProgress] = React.useState(100);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(timer); // Stop the timer
          return 0; // Set progress to 0
        } else {
          return prevProgress - 1; // Decrement progress
        }
      });
    }, 640);
    setProgress(100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
