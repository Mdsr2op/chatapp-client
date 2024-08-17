import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlerts = [
    {
      chatId: "122",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack
      width={w}
      overflow={"auto"}
      position={"relative"}
      height={"calc(100vh - 5rem)"}
    >
      {chats.map((data, index) => {
        const { avatar, name, _id, groupChat, members } = data;

        const newMessageAlert = newMessagesAlerts.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members.some((member) => onlineUsers.includes(_id));
        return (
          <ChatItem
            newMessagesAlert={newMessageAlert}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
            key={_id}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
