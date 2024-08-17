import { Stack, Typography } from "@mui/material";
import React from "react";
import GroupItem from "../shared/GroupItem";

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w} overflow={"auto"} position={"relative"} height={"100dvh"}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No groups
        </Typography>
      )}
    </Stack>
  );
};

export default GroupList;
