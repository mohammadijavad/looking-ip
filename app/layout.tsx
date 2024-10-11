"use client";
import React from 'react'
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
