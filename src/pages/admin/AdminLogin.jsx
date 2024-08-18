import { useStrongPassword } from "6pp";
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

const AdminLogin = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("login")
  }

  if(isAdmin) <Navigate to="/admin/dashboard" />

  const password = useStrongPassword();
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
        <Typography variant="h5">Login</Typography>
        <form
          style={{
            width: "100%",
            marginTop: "1rem",
          }}
          onClick={submitHandler}
        >

          <TextField
            required
            fullWidth
            label="Secret Key"
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
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
