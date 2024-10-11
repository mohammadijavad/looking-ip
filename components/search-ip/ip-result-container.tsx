import { useStoreIps } from "@/store/ips";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styled from "styled-components";
import LocationMap from "@/components/map";

const Item = styled(Box)(() => ({
  margin: "0.5rem",
}));

const Title = styled.span`
  color: #7e838f !important;
`;

export default function IpResultContainer() {
  const { ipList } = useStoreIps();
  return ipList.map(({ ip, as, location }, index) => (
    <Box
      key={ip}
      sx={{
        background: "#F6F7F9",
        width: "100%",
        borderRadius: "8px",
        p: "1rem",
        mt: index >= 1 ? "1rem" : "0",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ flex: "2" }}>
          <Box display="flex" flexWrap="wrap" gap="2rem">
            <div>
              <Item>
                <Title>Ip Address: </Title>
                <span>{ip}</span>
              </Item>
              <Item>
                <Title>Country: </Title>
                <span>{location?.country}</span>
              </Item>
              <Item>
                <Title>Region: </Title>
                <span>{location?.region}</span>
              </Item>
              <Item>
                <Title>Name: </Title>
                <span>{as?.name}</span>
              </Item>
            </div>
            <div>
              <Item>
                <Title>Latitude: </Title>
                <span>{location?.lat}</span>
              </Item>
              <Item>
                <Title>Longitude: </Title>
                <span>{location?.lng}</span>
              </Item>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} sx={{ flex: "1" }}>
          <LocationMap
            latitude={location.lat}
            longitude={location.lng}
            name={as?.name || ip}
          />
        </Grid>
      </Grid>
    </Box>
  ));
}
