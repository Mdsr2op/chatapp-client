import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100dvh - 4rem)"} spacing={"1rem"}>
      <Grid
        item
        sm={4}
        md={3}
        height={"100%"}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Skeleton variant="rectangular" height={"100dvh"} />
      </Grid>

      <Grid item xs={12} sm={8} md={6} height={"100%"}>
        <Stack spacing={"1rem"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key= {index} variant="rounded" height={"5rem"} />
          ))}
        </Stack>
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
        <Skeleton variant="rectangular" height={"100dvh"} />
      </Grid>
    </Grid>
  );
};

export default LayoutLoader;
