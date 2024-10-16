"use client";
import { Button, Box } from "@mui/material";
import { useStore } from "@/store/login";
import DialogContainer from "@/components/dialog";
import PhoneNumberModal from "@/components/login/phone-number-modal";
import SmsCodeVerificationModal from "@/components/login/sms-code-verification-modal";
import { useState, useMemo } from "react";

export default function Container() {
  const { step, phoneNumber } = useStore();
  const [isOpen, setIsOpen] = useState(true);

  const modalContent = useMemo(() => {
    const isPhoneNumberModal = step === 1;
    return {
      component: isPhoneNumberModal ? (
        <PhoneNumberModal />
      ) : (
        <SmsCodeVerificationModal />
      ),
      title: isPhoneNumberModal
        ? "به پنل مدیریت تسک پادرو خوش آمدید"
        : "کد تایید را وارد کنید",
      subTitle: isPhoneNumberModal
        ? "برای ورود، لطفا شماره موبایل خود را وارد کنید"
        : `کد تایید برای شماره ${phoneNumber} پیامک شد`,
    };
  }, [step, phoneNumber]);


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Button variant="contained" size="large" onClick={() => setIsOpen(true)}>
        Lets Get start ☑️
      </Button>

      {isOpen && (
        <DialogContainer
          maxWidth={"xs"}
          isShowBack={step === 2}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          content={modalContent.component}
          title={modalContent.title}
          subTitle={modalContent.subTitle}
        />
      )}
    </Box>
  );
}
