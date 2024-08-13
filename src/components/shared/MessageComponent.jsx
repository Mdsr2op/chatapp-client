import { Typography } from "@mui/material";
import React, { memo } from "react";
import { lightBlue } from "../constants/color";
import moment from "moment";

const MessageComponent = ({ message, user }) => {
  const { content, attachements = [], sender, createdAt } = message;
  const timeAgo = moment(createdAt).fromNow();
  const sameSender = sender._id === user._id;
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={lightBlue} fontWeight={"600"} variant="">
          {sender.name}
        </Typography>
      )}

      {content && <Typography>{content}</Typography>}

      {attachements.length > 0 &&
        attachements.map((attachement, index) => {
          const url = attachment.url;
          const file = "abc";

          return (
            <Box key={index}>
              <a
                href=""
                target="_blank"
                download
                style={{ color: "black" }}
              ></a>
            </Box>
          );
        })}

      {
        <Typography variant="caption" color={"text.secondary"}>
          {timeAgo}
        </Typography>
      }
    </div>
  );
};

export default memo(MessageComponent);
