import { Block, CameraAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container, maxWidth, Stack } from "@mui/system";
import React, { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validatators";

const Login = () => {
  const [login, setLogin] = useState(true);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword();
  const avatar = useFileHandler("single")

  const toggleLogin = () => setLogin((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault()
  }

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {login ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                autoComplete="off"
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                autoComplete="off"
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button fullWidth variant="text" onClick={toggleLogin}>
                Sign up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignUp}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": {
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                  </>
                </IconButton>
              </Stack>
              
              {avatar.error && (
                <Typography color="error" variant="caption" width= {"fit-content"} display={"block"} m={"1rem auto"}>
                  {avatar.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                color={username.error ? "error" : "primary"}
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                autoComplete="off"
              />

              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                color={password.error ? "error" : "primary"}
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                autoComplete="off"
              />
              
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button fullWidth variant="text" onClick={toggleLogin}>
                Log in instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
