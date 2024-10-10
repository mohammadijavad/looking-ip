import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useStore } from "@/store/login";
import InputCode from "@/components/login/sms-code-verification-modal/Input-code";
import React, { useState } from "react";
import { errorValidation } from "@/components/utility";
import dynamic from "next/dynamic";
import ExpireTimer from "@/components/expire-timer";
import {useRouter} from "next/navigation";

const NotificationSnackbar = dynamic(
    () => import("@/components/notification-snackbar"),
);

export default function SmsCodeVerificationModal() {
    const router=useRouter()
    const { setStep } = useStore();
    const [open, setOpen] = useState<boolean>(false);
    const [sentCode, setSentCode] = useState<string>('');
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [expireTime, setExpireTime] = useState<number>(2);

    function validateSmsCode(code:string): void {
        if (+code === 1111) {
            router.replace('/ip')
        } else {
            setOpen(true);
        }
    }
    function submitSmsCodeField() {
        if (isFinished) {
            setExpireTime(2);
            setIsFinished(false);
        } else {
            validateSmsCode(sentCode);
        }
    }

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ width: "90%", mx: "auto" }}
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
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        marginTop: "1rem",
                        p: "1rem",
                        fontFamily: "Vazir",
                        fontWeight: 700,
                    }}
                    fullWidth
                    onClick={submitSmsCodeField}
                >
                    {isFinished ? "ارسال مجدد کد" : "تایید"}
                </Button>
            </Box>

            {open && (
                <NotificationSnackbar
                    open={open}
                    onClose={() => setOpen(false)}
                    message={errorValidation.smsCode}
                    autoHideDuration={2000}
                    severity="error"
                />
            )}
        </>
    );
}
