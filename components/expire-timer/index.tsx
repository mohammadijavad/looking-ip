import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";

interface CountdownTimerProps {
  expireTime: number;
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
  isFinished: boolean;
}

const ExpireTimer: React.FC<CountdownTimerProps> = ({
  expireTime,
  setIsFinished,
  isFinished,
}) => {
  const theme = useTheme()
  const [timeLeft, setTimeLeft] = useState(expireTime * 60);
  useEffect(() => {
    if (expireTime > 0&&!isFinished) {
      setTimeLeft(expireTime * 60);
      setIsFinished(false)
    }
  }, [expireTime,isFinished]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft-1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  return (
    <Typography
      variant="p"
      sx={{
        fontSize: "14px",
        color: theme.palette.primary.light,
        cursor: "pointer",
        fontWeight:700
      }}
    >
      {!isFinished ? formatTime(timeLeft) : "ارسال مجدد کد"}
    </Typography>
  );
};

export default ExpireTimer;
