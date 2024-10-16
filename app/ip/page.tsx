"use client";
import SearchContainer from "@/components/search-ip/search-contaianer";
import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";
import { useStoreIps } from "@/store/ips";
import IpResultContainer from "@/components/search-ip/ip-result-container";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { searchThrottle } from "@/components/helpers/search-throttle";

const NotificationSnackbar = dynamic(
  () => import("@/components/notification-snackbar"),
);

interface WrapperBoxProps {
  animate: boolean;
}

const moveUpAnimation = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-150px);
    }
`;

const Container = styled.div`
  background: url("https://podro.com/wp-content/uploads/2023/11/background-pattern.svg")
    center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperBox = styled(Box)<WrapperBoxProps>`
  transition: transform 0.2s ease;
  ${({ animate }) =>
    animate &&
    css`
      animation: ${moveUpAnimation} 0.5s forwards;
    `}
`;

export default function Page() {
  const [lastReset, setLastReset] = useState(0);
  const [callCount, setCallCount] = useState(0);
  const { ipList, setIpList } = useStoreIps();
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function getExistedIp(ipAddress: string) {
    const isExistIp = ipList.some((item) => item.ip === ipAddress);
    if (isExistIp) {
      setError("در لیست IP ها وجود دارد.⚠️");
    }
    return isExistIp;
  }

  const getIp = searchThrottle(
    async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ip}`,
        );
        if (!response.ok) {
          throw new Error("متاسفانه خطایی رخ داده است");
        }
        const data = await response.json();
        setIpList([...ipList, data]);
      } catch (error) {
        setError(error.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
        setIp("");
      }
    },
    callCount,
    setCallCount,
    lastReset,
    setLastReset,
    60000,
  );

  useEffect(() => {
    if (ip && !getExistedIp(ip)) {
      getIp();
    }
  }, [ip]);

  return (
    <>
      <Container>
        <WrapperBox
          animate={loading && ipList.length === 0}
          sx={{
            boxShadow: 3,
            borderRadius: "1rem",
            background: "#fff",
            px: "1.5rem",
            py: "2rem",
            mt: "2rem",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="60%"
        >
          <SearchContainer setIp={setIp} loading={loading} />
          {ipList.length >= 1 && <IpResultContainer />}
        </WrapperBox>
      </Container>
      {error && (
        <NotificationSnackbar
          open={!!error}
          onClose={() => setError("")}
          message={error}
          autoHideDuration={2000}
          severity="error"
        />
      )}
    </>
  );
}
