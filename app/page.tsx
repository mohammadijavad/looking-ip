"use client";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 1rem;
  font-size: 1rem;
`;

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Button variant="contained">
        <StyledLink href="/login">Login 🔐</StyledLink>
      </Button>
    </Box>
  );
}
