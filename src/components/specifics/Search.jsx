import { useInputValidation } from "6pp";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { sampleUsers } from "../constants/sampleData";
import UserItem from "../shared/UserItem";

const Search = () => {
  const search = useInputValidation("");
  const [users, setUsers] = useState(sampleUsers)
  let isAddFriendLoading = false;
  const addFriendHandler = (id) => { console.log(id) }
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {
          users.map((user, index) => (
            <UserItem key={index } user={user} handler={addFriendHandler} isHandlerLoading={isAddFriendLoading} />
          ))
        }
      </Stack>
    </Dialog>
  );
};

export default Search;
