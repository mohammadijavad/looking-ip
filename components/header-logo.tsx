import React from "react";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "@/public/assets/logo.png"; // Adjust path as needed

interface HeaderLogoProps {
  onClose?: () => void;
  isShowActionButton?: boolean;
}

const HeaderLogo: React.FC<
  HeaderLogoProps
> = ({ onClose, isShowActionButton }) => {
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
          onClick={onClose}
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
