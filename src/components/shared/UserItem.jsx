  import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
  import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
  import React, { memo } from "react";

  const UserItem = ({ user, handler, isHandlerLoading, isAdded=false, styling}) => {
    const { name, _id, avatar } = user;
    return (
      <div>
        <ListItem>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            width={"100%"}
            {...styling}
          >
            <Avatar />

            <Typography
              variant="body1"
              sx={{
                flexGlow: 1,
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              {name}
            </Typography>

            <IconButton
              size="small"
              sx={{
                bgcolor: isAdded ? "error.main" : "primary.main",
                color: "white",
                "&:hover": {
                  bgcolor: isAdded ? "error.dark" : "primary.dark",
                },
              }}
              onClick={() => handler(_id)}
              disabled={isHandlerLoading}
            >
              {
                isAdded ? <RemoveIcon /> : <AddIcon />
              }
              
            </IconButton>
          </Stack>
        </ListItem>
      </div>
    );
  };

  export default memo(UserItem);
