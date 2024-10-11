import React from "react";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "@/public/assets/logo.png";
import { useStore } from "@/store/login";

interface HeaderLogoProps {
  isShowActionButton?: boolean;
}

export  default  function HeaderLogo({ isShowActionButton }: HeaderLogoProps) {
  const { setStep } = useStore();

  return (
      <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: "3rem" }}
      >
        {isShowActionButton && (
            <IconButton
                aria-label="close"
                onClick={() => setStep(1)}
                sx={{
                  position: "absolute",
                  left: 8,
                  top: 35,
                  color: "#000",
                }}
            >
              <FaArrowLeftLong />
            </IconButton>
        )}
        <Image src={logo} alt="logo" width={80} height={36} />
      </Box>
  );
}


