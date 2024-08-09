import { Box, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessagesAlert,
  index = 0,
  handleDeleteChat,
}) => {

  return (
    <Link to={`/chat/${_id}`}
    sx={{padding: 0}}
    onContextMenu={e => handleDeleteChat(e, _id, groupChat)}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
          padding: "1rem",
        }}
      >
        <Stack>
            <Typography>{name}</Typography>
            {
                newMessagesAlert && 
                <Typography>{newMessagesAlert.count} new messages</Typography>
            }
        </Stack>
        
        {isOnline && <Box
        sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "green",
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)"
        }}></Box>}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
