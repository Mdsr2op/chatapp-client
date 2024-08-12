import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material'
const Home = () => {
  return (
    <Box height={"100%"}>
      <Typography p={"2rem"} textAlign={"center"} variant="h5">Select a chat to begin with</Typography>
    </Box>
  )
}

export default AppLayout()(Home)
