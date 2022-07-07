import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box 
      flex={2} 
      p={2} 
      sx={{
        display:{
          xs: 'none', sm: 'block'
        }
      }}>
        <Box position='fixed'>
          <Typography variant='h6' fontWeight={100}>Amigos online</Typography>
          <AvatarGroup max={4}>
            <Avatar
              alt='John Doe'
              src='https://material-ui.com/static/images/avatar/3.jpg'
            />
            <Avatar
              alt='John Doe'
              src='https://material-ui.com/static/images/avatar/4.jpg'
            />
            <Avatar
              alt='John Doe'
              src='https://material-ui.com/static/images/avatar/5.jpg'
            />
            <Avatar
              alt='John Doe'
              src='https://material-ui.com/static/images/avatar/6.jpg'
            />
            <Avatar
              alt='John Doe'
              src='https://material-ui.com/static/images/avatar/7.jpg'
            />
          </AvatarGroup>
        </Box>
    </Box>
  )
}

export default Rightbar