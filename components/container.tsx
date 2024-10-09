"use client";

import { Button, Box } from "@mui/material";
import { useStore } from "@/store/login";
import DialogContainer from "@/components/dialog";
import PhoneNumberModal from "@/components/login/phone-number-modal";
import SmsCodeVerificationModal from "@/components/login/sms-code-verification-modal";

export default function Container() {
  const { step, setStep } = useStore();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Button variant="contained" size="large" onClick={() => setStep(1)}>
        Lets Get start ☑️
      </Button>
      {step === 1 && (
        <DialogContainer
          maxWidth={'xs'}
          open={step === 1}
          onClose={() => setStep(0)}
          content={step===1?<PhoneNumberModal/>:<SmsCodeVerificationModal/>}
          title={'به پنل مدیریت تسک پادرو خوش آمدید'}
          subTitle={'برای ورود، لطفا شماره موبایل خود را وارد کنید'}
        />
      )}
    </Box>
  );
}
