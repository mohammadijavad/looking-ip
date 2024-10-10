import React from "react";
import { Dialog, DialogContent, Box, DialogTitle } from "@mui/material";
import HeaderLogo from "@/components/header-logo";
import { useStore } from "@/store/login";
interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subTitle?: string;
  content: React.ReactNode;
  fullWidth?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  isShowBack?: boolean;
}

const DialogContainer: React.FC<DialogProps> = ({
  open,
  onClose,
  content,
  fullWidth = true,
  maxWidth = "sm",
  title,
  subTitle,
  isShowBack,
}) => {
  const { step } = useStore();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <Box sx={{ py: "2.5rem", px: "1.5rem" }}>
        <HeaderLogo isShowActionButton={isShowBack} />
        <DialogTitle
          sx={{
            p: "0",
            mb: "8px",
            textAlign: "center",
            fontFamily: "Vazir",
            fontWeight: "700",
            fontSize: "1rem",
          }}
        >
          {title}
        </DialogTitle>
        <DialogTitle
          sx={{
            p: "0",
            mb: step === 1 ? "2rem" : "0.5rem",
            textAlign: "center",
            fontFamily: "Vazir",
            fontWeight: "700",
            fontSize: "1rem",
            color: "#7E838F",
          }}
        >
          {subTitle}
        </DialogTitle>
        <DialogContent sx={{p:'0'}}>{content}</DialogContent>
      </Box>
    </Dialog>
  );
};

export default DialogContainer;
