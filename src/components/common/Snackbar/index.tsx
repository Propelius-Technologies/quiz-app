import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface snckbarProps {
  showMsg: boolean;
  handleClose: () => void;
  snackbarData: any;
}

export default function CustomizedSnackbars({
  showMsg,
  handleClose,
  snackbarData,
}: snckbarProps) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={showMsg}
        autoHideDuration={snackbarData?.duration}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarData.type}
          sx={{ width: "100%" }}
        >
          {snackbarData.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
