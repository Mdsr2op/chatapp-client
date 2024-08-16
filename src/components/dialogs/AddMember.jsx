import React, { useState } from "react";
import { sampleUsers } from "../constants/sampleData";
import UserItem from "../shared/UserItem";
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";

const AddMember = ({ isAddMember, isLoadingMember, chatId }) => {
    const [users, setUsers] = useState(sampleUsers);
    const [members, setMembers] = useState([]);

  const closeHandler = () => {
  };

  const addMemberHandler = (id) => {
    setMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };
  console.log(members);

  return (
    <Dialog open={isAddMember} onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

        <Stack spacing={"1rem"}>
          {users.length > 0 ? (
            users.map((user) => (
              <UserItem key={user._id} user={user} handler={addMemberHandler} isAdded={members.includes(user._id)}/>
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            onClick={addMemberHandler}
            variant="contained"
            disabled={isLoadingMember}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMember;
