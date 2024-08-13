import React from "react";
import Header from "../shared/Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specifics/ChatList";
import { sampleChats } from "../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specifics/Profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const { chatId } = useParams();

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete chat", _id, groupChat);
    };

    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100dvh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            height={"100%"}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <ChatList
              handleDeleteChat={handleDeleteChat}
              chats={sampleChats}
              chatId={chatId}
              onlineUsers={["1", "2"]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            height={"100%"}
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "8.2rem",
              bgcolor: "rgba(0,0,0,1)",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
