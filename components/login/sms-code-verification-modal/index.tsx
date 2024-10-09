import {Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useStore } from "@/store/login";
import InputCode from "@/components/login/sms-code-verification-modal/Input-code";
import React, { useState } from "react";
import { errorValidation } from "@/components/utility";
import dynamic from "next/dynamic";
import ExpireTimer from "@/components/expire-timer";
const NotificationSnackbar = dynamic(
  () => import("@/components/notification-snackbar"),
);
export default function SmsCodeVerificationModal() {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const { setStep } = useStore();
  const [open, setOpen] = useState(false);
  function validateSmsCode(code: string): void {
    const checkNumber = +code;
    if (checkNumber === 1111) {
      setDisableSubmit(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="p"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "blue",
            cursor: "pointer",
            mb: "2rem",
            fontFamily: "Vazir",
          }}
          onClick={() => setStep(1)}
        >
          کد را دریافت نکردید؟
        </Typography>
        <InputCode
          label=""
          length={4}
          // loading={true}  //todo need to loading when push new page🤔
          onComplete={validateSmsCode}
          setDisableSubmit={setDisableSubmit}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "Vazir",
              fontSize: "14px",
              color: "blue",
              cursor: "pointer",
            }}
          >
            ارسال مجدد کد
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Vazir",
              fontSize: "14px",
            }}
          >
            کد را دریافت نکردید؟
          </Typography>
        </Box>
        <ExpireTimer
          minutes={1}
          disabled={disableSubmit}
          setDisableSubmit={setDisableSubmit}
        />
      </Box>

      {open && (
        <NotificationSnackbar
          open={open}
          onClose={setOpen}
          message={errorValidation.smsCode}
          autoHideDuration={4000}
          severity="error"
        />
      )}
    </>
  );
}
