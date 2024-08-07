import React from "react";
import Header from "../shared/Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
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
            First
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            height={"100%"}
            bgcolor={"primary.main"}
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.1)",
            }}
          >
            Last
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
