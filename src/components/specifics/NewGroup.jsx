import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [members, setMembers] = useState([]);
  const groupName = useInputValidation("");

  const selectMemberHandler = (id) => {
    setMembers((prev) =>
      members.includes(id)
        ? prev.filter((currentUserId) => currentUserId !== id)
        : [...prev, id]
    );
  };
console.log(members);
  const submitHandler = () => {
    console.log("Group created");
  };

  const closeHandler = () => {

  }
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>

        {users.map((user, index) => (
          <UserItem key={user._id} user={user} handler={selectMemberHandler} isAdded={members.includes(user._id)}/>
        ))}
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
