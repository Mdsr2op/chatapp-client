import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { gray, orangeLight } from "../components/constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import { orange } from "../components/constants/color";
import { sampleMessages } from "../components/constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";
import FileMenu from "../components/dialogs/FileMenu";

const Chat = () => {
  const containerRef = useRef(null);
  const user = {
    _id: "123",
    name: "John Doe"
  }
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={gray}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessages.map(item => (
          <MessageComponent key={item._id} message={item} user={user}/>
        ))}
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type a message here..." />

          <IconButton sx={{
            bgcolor: orange,
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
           " &:hover":{
              bgcolor: orangeLight
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
