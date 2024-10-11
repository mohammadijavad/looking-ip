"use client";
import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Link href="/login" passHref>
        <Button variant="contained">Login 🔐</Button>
      </Link>
    </Box>
  );
}
