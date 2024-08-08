import React, { lazy, Suspense, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Backdrop,
} from "@mui/material";
import { orange } from "./constants/color";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const SearchDialog = lazy(() => import("../specifics/Search"))
const NewGroupDialog = lazy(() => import("../specifics/NewGroup"))
const NotificationsDialogue = lazy(() => import("../specifics/Notifications"))

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const navigate = useNavigate();

  const handleHamburger = () => {
    setIsMenuClicked((prev) => !prev);
  };

  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotifications = () => {
    setIsNotification((prev) => !prev);
  };
  const logoutHandler = () => {
    setIsMenuClicked((prev) => !prev);
  };

  const navigateToGroups = () => navigate("/groups");

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat App
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton
                color="inherit"
                size="large"
                onClick={handleHamburger}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Box>
              <Icon
                title="Search"
                onClick={openSearchDialog}
                icon={<SearchIcon />}
              />
              <Icon
                title="New Group"
                onClick={openNewGroup}
                icon={<AddIcon />}
              />
              <Icon
                title="Manage Groups"
                onClick={navigateToGroups}
                icon={<GroupIcon />}
              />
              <Icon
                title="Notifications"
                onClick={openNotifications}
                icon={<NotificationsIcon />}
              />
              <Icon
                title="Logout"
                onClick={logoutHandler}
                icon={<LogoutIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <SearchDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroupDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open/>}>
          <NotificationsDialogue />
        </Suspense>
      )}
    </>
  );
};

const Icon = ({ title, onClick, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
