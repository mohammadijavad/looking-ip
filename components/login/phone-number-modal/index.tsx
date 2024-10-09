import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { numberRegex, phoneRegex, errorValidation } from "@/components/utility";
import { useStore } from "@/store/login";

export default function PhoneNumberModal() {
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
        pt: "1rem",
        borderRadius: "16px",
      }}
    >
      <TextField
        placeholder="شماره تماس"
        value={inputValue}
        onChange={handleChange}
        error={!!error}
        helperText={error}
        inputProps={{ className: "input-placeHolder" }}
        sx={{
          position: "relative",
          marginBottom: "0.2rem",
          "& .MuiFormHelperText-root": {
            position: "absolute",
            bottom: "-18px", // Adjust positioning as needed
            right: "0",
            margin: "0",
            fontFamily: "Vazir",
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit} // Call handleSubmit on button click
        sx={{
          marginTop: "1rem",
          p: "1rem",
          fontFamily: "Vazir",
          fontWeight: 700,
        }}
        fullWidth
      >
        ارسال کد‌ تایید
      </Button>
    </Box>
  );
}
