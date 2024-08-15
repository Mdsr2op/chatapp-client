import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { matteBlack, orange } from "../components/constants/color";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as HamburgerIcon,
  Edit as EditIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import GroupList from "../components/specifics/GroupList";
import { sampleChats } from "../components/constants/sampleData";

const ConfirmDeletion = lazy(() =>
  import("../components/dialogs/ConfirmDeletion")
);

const Groups = () => {
  const navigate = useNavigate();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [temporaryGroupName, setTemporaryGroupName] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const chatId = useSearchParams()[0].get("group");
  const {isAddMember, setIsAddMember} = useState(true);

  useEffect(() => {
    setGroupName(`New Group ${chatId}`);
    setTemporaryGroupName(`New Group ${chatId}`);

    return () => {
      setGroupName("");
      setTemporaryGroupName("");
      setIsEdit(false);
    };
  }, [chatId]);

  const navigateBack = () => {
    navigate("/");
  };

  const handleHamburger = (e) => {
    e.preventDefault();
    setIsMenuOpened((prev) => !prev);
  };

  const handleHamburgerClose = (e) => {
    e.preventDefault();
    setIsMenuOpened(false);
  };

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(temporaryGroupName);
  };

  const openAddMemberHandler = () => {
    console.log("Member Added");
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Member deletion dialog opened");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const deleteGroupHandler = () => {
    console.log("Delete Handler");
    setConfirmDeleteDialog(false);
  };

  const GroupName = (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={"1rem"}
        padding={"3rem"}
      >
        {isEdit ? (
          <>
            <TextField
              value={temporaryGroupName}
              onChange={(e) => setTemporaryGroupName(e.target.value)}
            />
            <IconButton onClick={updateGroupName}>
              <DoneIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h4">{groupName}</Typography>
            <IconButton onClick={() => setIsEdit(true)}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </Stack>
    </>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <Tooltip title="menu">
          <IconButton onClick={handleHamburger}>
            <HamburgerIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matteBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <Grid container height={"100dvh"}>
      <Grid
        item
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        sm={4}
        bgcolor={orange}
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
        sm={4}
      >
        {IconBtns}

        {groupName && (
          <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>

            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
              bgcolor={"red"}
            ></Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {
        isAddMember && (
          <Suspense fallback={<Backdrop open />}></Suspense>
        )
      }
      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeletion
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteGroupHandler}
          />
        </Suspense>
      )}
      <Drawer
        open={isMenuOpened}
        onClose={handleHamburgerClose}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <GroupList w={"50vw"} myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

export default Groups;
