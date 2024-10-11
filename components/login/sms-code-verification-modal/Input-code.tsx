import React, { useState, useRef } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { notNumberRegexp } from "@/components/utility";
interface InputCodeProps {
  length: number;
  label: string;
  loading: boolean;
  onComplete: (code: string) => void;
  setSentCode: React.Dispatch<React.SetStateAction<string>>;
}

const InputCode: React.FC<InputCodeProps> = ({
  length,
  label,
  loading,
  onComplete,
  setSentCode
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const processInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    slot: number,
  ) => {
    const num = e.target.value;
    if (notNumberRegexp.test(num)) return;

    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot < length - 1) {
      inputs.current[slot + 1]?.focus();
    }
    if (newCode.every((n) => n !== "")) {
      const joinCodes=newCode.join("")
      onComplete(joinCodes);
      setSentCode(joinCodes)
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>, slot: number) => {
    if (e.key === "Backspace" && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1]?.focus();
    }
  };

  return (
    <Box sx={{ mb: "1rem", width: "100%" }}>
      <Typography variant="h6" textAlign="center">
        {label}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        {code.map((num, idx) => (
          <Box item key={idx}>
            <TextField
              type="text"
              inputMode="numeric"
              value={num}
              autoFocus={idx===0}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              inputProps={{
                maxLength: 1,
                readOnly: loading,
                style: { textAlign: "center", padding: "15px" },
              }}
              variant="outlined"
              size="small"
              inputRef={(ref) => (inputs.current[idx] = ref)}
              sx={{ width: "75px" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InputCode;
