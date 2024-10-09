import React from "react";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "@/public/assets/logo.png";
import {useStore} from "@/store/login"; // Adjust path as needed

interface HeaderLogoProps {
  isShowActionButton?: boolean;
}

const HeaderLogo: React.FC<
  HeaderLogoProps
> = ({ isShowActionButton }) => {
  const {  setStep } = useStore();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ mb: "3rem" }} // Margin bottom for the image container
    >
      {isShowActionButton && (
        <IconButton
          aria-label="close"
          onClick={()=>setStep(1)}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: (theme) => theme.palette.black,
          }}
        >
          <FaArrowLeftLong />
        </IconButton>
      )}
      <Image src={logo} alt="logo" width={79} height={36} />
    </Box>
  );
};

export default HeaderLogo;
