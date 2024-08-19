import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  AppBar,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/StyledComponents";
import Widget from "../../components/shared/Widget";
import DoughnutChart from "../../components/shared/charts/DoughnutChart";
import LineChart from "../../components/shared/charts/LineChart";

const Appbar = (
  <Paper
    elevation={3}
    sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
  >
    <Stack direction={{xs: "column", md: "row"}} alignItems={"center"} spacing={"1rem"}>
      <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
      <SearchField placeholder="Search" />
      <CurveButton>Search</CurveButton>
      <Box sx={{ flexGrow: 1 }} />

      <Typography
        sx={{
          display: { xs: "none", lg: "block" },
          color: "rgba(0,0,0,0.7)",
          textAlign: "center",
        }}
      >
        {moment().format("dddd, MMMM DD YYYY")}
      </Typography>

      <NotificationsIcon />
    </Stack>
  </Paper>
);

const Widgets = (
  <Stack
    direction={{
      xs: "column",
      sm: "row",
    }}
    spacing="2rem"
    justifyContent="space-between"
    alignItems={"center"}
    margin={"2rem 0"}
  >
    <Widget title={"Users"} value={323} Icon={<PersonIcon />} />
    <Widget title={"Chats"} value={192} Icon={<GroupIcon />} />
    <Widget title={"Messages"} value={25} Icon={<MessageIcon />} />

  </Stack>
);
const Dashboard = () => {
  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{ xs: "flex-start", lg: "stretch" }}
          sx={{ gap: "2rem" }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "40rem",
            }}
          >
            <Typography margin={"2rem 0"} variant={"h4"}>
              Recent Messages
            </Typography>
            <LineChart value={[10, 20, 30, 40, 50, 60, 70]} />
          </Paper>

          <Paper
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              maxWidth: "25rem",
            }}
          >
            <DoughnutChart value={[30, 70]} />
            <Stack
              direction={"row"}
              spacing={"0.5em"}
              sx={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <GroupIcon />
              <Typography>Vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>

        {Widgets}
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;
