import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  Groups as GroupsIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import { Link as LinkComponent, useLocation } from "react-router-dom";
import { matteBlack } from "../constants/color";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;
const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];
const Sidebar = ({ w = "100%" }) => {
  const logoutHandler = () => {
    console.log("logout")
  }
  const location = useLocation();
  return (
    <Stack width={w} direction={"column"} p={"1rem"} spacing={"3rem"}>
      <Typography variant="h5" textTransform={"uppercase"}>
        Chat App
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            sx={
              location.pathname === tab.path && {
                bgcolor: matteBlack,
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }
            }
            key={tab.name}
            to={tab.path}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"0.3rem"}>
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}
          <Link
            onClick={logoutHandler}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"0.3rem"}>
              <ExitToAppIcon />
              <Typography fontSize={"1.2rem"}>Logout</Typography>
            </Stack>
          </Link>
        
      </Stack>
    </Stack>
  );
};
const AdminLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuOpen = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Grid container minHeight="100vh">
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobileMenuOpen}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{ bgcolor: "gray"}}
      >
        {children}
      </Grid>
      <Drawer open={isMenuOpen} onClose={handleMobileMenuOpen}>
        <Sidebar w={"50vw"} />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
