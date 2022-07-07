import { Mail, Notifications, Settings } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography} from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})

const SearchBar = styled('div')(({theme}) => ({
  backgroundColor:'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
})); 

const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }
}));

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs:'none', sm:'block'}}}>
          MUI Practice
        </Typography>
        <Settings sx={{display: {sx: 'block', sm:'none'}}}/>
        <SearchBar>
          <InputBase placeholder='Search'/>
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar 
          sx={{width:30, height:30}}
          src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg'
          /> 
        </Icons>
        <UserBox>
          <Avatar 
            sx={{width:30, height:30}}
            src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg'
          />
          <Typography variant='span'>Ann</Typography> 
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar