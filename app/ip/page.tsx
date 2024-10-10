"use client";
//API KEY in env.local for make test easy i added to public
import SearchContainer from "@/components/search-ip/search-container";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {useStoreIps} from "@/store/ips";
import IpResultContainer from "@/components/search-ip/ip-result-container";
import {Box} from "@mui/material";
const Container = styled.div`
  background: url("https://podro.com/wp-content/uploads/2023/11/background-pattern.svg")
    center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default  function Page() {
  const {ips,setIpList}=useStoreIps()
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  function getExistedIp(){
    return ips.some((item)=>item.ip===ip)
  }
  useEffect(() => {
    const getIp = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ip}`,
        );
        if (!response.ok) {
          throw new Error("متاسفانه خطایی رخ داده است");
        }
        const data = await response.json();
        setIpList([...ips,data])

      } catch (error) {
      } finally {
        setLoading(false);
        setIp('')
      }
    };
    const isIpExisted=getExistedIp()
    ip &&!isIpExisted && getIp()
  }, [ip]);

  return (
    <Container>
      <Box
          sx={{
            boxShadow: 3,
            borderRadius: "1rem",
            background: "#fff",
            px: "1.5rem",
            py: "2rem",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="60%">

      <SearchContainer setIp={setIp} loading={loading} />
      {ips.length>=1&&<IpResultContainer/>}
      </Box>
    </Container>
  );
}
