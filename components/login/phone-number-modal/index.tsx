import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useStore } from "@/store/login";
import { numberRegex, phoneRegex, errorValidation } from "@/components/utility";

export default function PhoneNumberModal() {
  const theme = useTheme();
  const { setPhoneNumber, phoneNumber, setStep } = useStore();
  const [inputValue, setInputValue] = useState(phoneNumber);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (numberRegex.test(value)) {
      setInputValue(value);
      setError("");
    }
  };

  const handleSubmit = () => {
    if (!phoneRegex.test(inputValue)) {
      setError(errorValidation.phoneNumber);
    } else {
      setPhoneNumber(inputValue);
      setStep(2);
      setError("");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        paddingTop: "1rem",
        borderRadius: "16px",
      }}
    >
      <TextField
        placeholder="شماره تماس"
        value={inputValue}
        onChange={handleChange}
        error={!!error}
        helperText={error}
        autoFocus
        inputProps={{ className: "input-placeHolder",  maxLength: 11 }}
        sx={{
          position: "relative",
          marginBottom: "0.2rem",
          "& .MuiFormHelperText-root": {
            position: "absolute",
            bottom: "-18px",
            right: "0",
            margin: "0",
          },
        }}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          marginTop: "1rem",
          padding: "0.7rem",
          fontWeight: 700,
          backgroundColor: theme.palette.primary.dark,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark + "CC",
          },
        }}
        fullWidth
      >
        ارسال کد‌ تایید
      </Button>
      <Typography
        variant="body2"
        component="p"
        sx={{ textAlign: "center", marginTop: "1rem" }}
      >
        حساب کاربری ندارد؟
        <Link href="/" passHref>
          <Typography
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            ثبت نام
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
}
