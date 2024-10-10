"use client";

import { Button, Box } from "@mui/material";
import { useStore } from "@/store/login";
import DialogContainer from "@/components/dialog";
import PhoneNumberModal from "@/components/login/phone-number-modal";
import SmsCodeVerificationModal from "@/components/login/sms-code-verification-modal";
import {useEffect, useState} from "react";

export default function Container() {
  const { step,phoneNumber,setStep } = useStore();
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    setOpen(true)
  },[])

  useEffect(()=>{
    setStep(1)
  },[open])
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Button variant="contained" size="large" onClick={() => setOpen(true)}>
        Lets Get start ☑️
      </Button>
      {open && (
        <DialogContainer
          maxWidth={"xs"}
          isShowBack={step !== 1}
          open={open}
          onClose={() => setOpen(false)}
          content={
            step === 1 ? <PhoneNumberModal /> : <SmsCodeVerificationModal />
          }
          title={
            step === 1
              ? "به پنل مدیریت تسک پادرو خوش آمدید"
              : "کد تایید را وارد کنید"
          }
          subTitle={step === 1? "برای ورود، لطفا شماره موبایل خود را وارد کنید":`کد تایید برای شماره ${phoneNumber} پیامک شد`}
        />
      )}
    </Box>
  );
}
