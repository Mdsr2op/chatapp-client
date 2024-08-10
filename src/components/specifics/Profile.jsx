import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={"3rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >
        <ProfileCard heading={"Bio"} text={"Hey there! I'm using chat-app"} />
        <ProfileCard
          heading={"Username"}
          text={"Mdsr2op"}
          icon={<UsernameIcon />}
        />
        <ProfileCard
          heading={"Name"}
          text={"Muddassir Khan"}
          icon={<FaceIcon />}
        />
        <ProfileCard
          heading={"Joined"}
          text={moment("2024-04-11T00:00:00.000Z").fromNow()}
          icon={<CalendarIcon />}
        />
      </Stack>
    </Stack>
  );
};

const ProfileCard = ({ heading, text, icon }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {icon && icon}

      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color={"gray"} variant="caption">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
