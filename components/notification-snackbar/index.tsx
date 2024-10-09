import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface NotificationSnackbarProps {
  open: boolean;
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
  onClose: () => void;
  horizontal?: "top"|'left'|'right'|'center'|'bottom';
  vertical?: "top"|'left'|'right'|'center'|'bottom';
}

const NotificationSnackbar: React.FC<NotificationSnackbarProps> = ({
  open,
  message,
  severity,
  autoHideDuration = 6000,
  onClose,
  vertical='top',
  horizontal='right',
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%", fontFamily:'Vazir' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationSnackbar;
