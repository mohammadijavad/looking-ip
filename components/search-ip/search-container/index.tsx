import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import {Box, InputBase, Typography, IconButton, CircularProgress} from "@mui/material";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";
import {errorValidation, ipv4Regexp, ipv6Regexp} from "@/components/utility";

const SearchBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const InputContainer = styled(Box)`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px 15px;
  width: 600px;
  position: relative;
  overflow: hidden;
`;

const StyledInputBase = styled(InputBase)`
  flex: 1;
  padding-left: 10px;
  text-align: right;
`;

const StyledSearchButton = styled(IconButton)`

  padding: 10px;
  border-radius: 50%;
`;
const StyledSearchButtonAction = styled(IconButton)`
  color: white !important;
  border-radius: 0 !important;
  padding: 20px !important;
  border-radius: 0 !important;
  position: absolute !important;
  background-color: #1043a6 !important;
  left: 0 !important;
`;
const StyledTypography = styled(Typography)`
  text-align: center;
  font-family: "Vazir" !important;
  direction: rtl;
  color: "#7E838F";
`;

const SearchComponent = ({setIp,loading}) => {

    const [error,setError]=useState<string>('')
    const [inputValue,setInputValue]=useState<string>('')
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value.trim());
        if (inputValue){
            setError('')
        }
    };
    const handleSearch = () => {
       if (!inputValue){
           setError(errorValidation.emptyValue)
       }else {
           const isIncludeIpv4=inputValue.match(ipv4Regexp)
           const isIncludeIpV6=inputValue.match(ipv6Regexp)
           if (isIncludeIpv4||isIncludeIpV6){
               setIp(inputValue)
               setInputValue('')
           }else {
               setError(errorValidation.ip)
           }

       }
    };
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

  return (
    <
    >
      <StyledTypography variant="h5">
        آی پی مد نظر خود را پیدا کنید
      </StyledTypography>

      <StyledTypography
        variant="body1"
        sx={{ color: "#7E838F", mt: "1rem", lineHeight: "30px" }}
      >
        اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید با
        استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا کنید. چه
        باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید، سپس روی "دریافت
        جزئیات IP" کلیک کنید.
      </StyledTypography>

      <SearchBox>
        <InputContainer>
          <StyledInputBase
            placeholder="جستجو"
            inputProps={{
              className: "input-placeHolder",
              style: { textAlign: "right" },
                onChange:handleInputChange
            }}
            onKeyPress={handleKeyPress}
            error={!!error}
            value={inputValue}
            disabled={loading}
          />
          <StyledSearchButton type="submit" aria-label="search">
            <GoSearch />
          </StyledSearchButton>

          <StyledSearchButtonAction type="submit" onClick={()=>!loading&&handleSearch()}>

              {loading?<CircularProgress size="30px" color='#fff' />:<GoSearch/>}
          </StyledSearchButtonAction>
        </InputContainer>
      </SearchBox>
        {!!error&&
            <StyledTypography sx={{color:'red',textAlign:'right',width:'100%'}}>{error}</StyledTypography>}
    </>
  );
};

export default SearchComponent;
