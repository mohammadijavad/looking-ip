import React, { useState } from "react";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/login";
import InputCode from "@/components/login/sms-code-verification-modal/Input-code";
import ExpireTimer from "@/components/expire-timer";
import dynamic from "next/dynamic";
import { errorValidation } from "@/components/utility";
import { useTheme } from "@mui/material/styles";

const NotificationSnackbar = dynamic(
  () => import("@/components/notification-snackbar"),
);

export default function SmsCodeVerificationModal() {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const router = useRouter();
  const { setStep } = useStore();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [sentCode, setSentCode] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [expireTime, setExpireTime] = useState(2);

  const validateSmsCode = (code) => {
    if (+code === 1111) {
      setLoading(true);
      setTimeout(()=>{

      router.replace("/ip");
      },2000)
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleSubmit = () => {
    if (isFinished) {
      resetTimer();
    } else {
      validateSmsCode(sentCode);
    }
  };

  const resetTimer = () => {
    setExpireTime(2);
    setIsFinished(false);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "95%", mx: "auto" }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            cursor: "pointer",
            textDecoration: "underline",
            mb: "2rem",
            color: theme.palette.primary.light,
          }}
          onClick={() => setStep(1)}
        >
          تغییر شماره همراه
        </Typography>

        <InputCode
          label=""
          length={4}
          onComplete={validateSmsCode}
          setSentCode={setSentCode}
        />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <ExpireTimer
            expireTime={expireTime}
            setIsFinished={setIsFinished}
            isFinished={isFinished}
          />
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            کد را دریافت نکردید؟
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "1rem",
            padding: "1rem",
            fontFamily: "Vazir",
            fontWeight: 700,
          }}
          fullWidth
          disabled={loading}
          onClick={handleSubmit}
        >
          {isFinished ? "ارسال مجدد کد" : loading?<CircularProgress size="30px" color='#fff' />: "تایید"}
        </Button>
      </Box>

      <NotificationSnackbar
        open={openSnackbar||loading}
        onClose={() => setOpenSnackbar(false)}
        message={loading?"انقال به صفحه 🔐IP": errorValidation.smsCode}
        autoHideDuration={2000}
        severity={loading?"success":"error"}
      />
    </>
  );
}
