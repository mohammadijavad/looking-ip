import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

interface CountdownTimerProps {
  minutes: number;
  disabled: boolean;
  setDisableSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpireTimer: React.FC<CountdownTimerProps> = ({
  minutes,
  disabled,
  setDisableSubmit,
}) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  useEffect(() => {
    if (timeLeft === 0) {
      setDisableSubmit(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  function resetTime() {
    setDisableSubmit(true);
    setTimeLeft(minutes * 60);
  }
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled}
      sx={{
        marginTop: "1rem",
        p: "1rem",
        fontFamily: "Vazir",
        fontWeight: 700,
        color: disabled ? "#616161" : "#fafafa",
      }}
      fullWidth
      onClick={resetTime}
    >
      {disabled ? (
        formatTime(timeLeft)
      ) : !disabled && !timeLeft ? (
        <span>ارسال مجدد کد</span>
      ) : (
        <span>تایید</span>
      )}
    </Button>
  );
};

export default ExpireTimer;
