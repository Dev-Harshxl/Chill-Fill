import React from 'react'
import { useState, useEffect } from 'react'
import { Box,Stack, Typography } from '@mui/material'
import Sidebar from "../components/Sidebar"

const Feed = () => {
  return (
   <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
    <Box px="20px" sx={{height:{sx:"auto",md:"93vh", borderRight:"1px solid #3d3d3d"}}}>
      <Sidebar></Sidebar>
      <Typography sx={{color:"#fff", marginTop:"5px"}}>
        CopyRight 2024 @Dev-Harshal
      </Typography>
    </Box>
   </Stack>
  )
}

export default Feed
