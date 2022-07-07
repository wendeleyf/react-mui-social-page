import { AccountBox, Group, Home, ManageAccounts, ModeNight, Person, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box 
      flex={1} 
      p={2} 
      sx={{
        display:{
          xs: 'none', sm: 'block'
        }
      }}>
        <List>
          <ListItem>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component='a' href='#groups'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary='Grupos' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component='a' href='#marketplace'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary='Marketplace' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary='Amigos' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon>
                <ManageAccounts />
              </ListItemIcon>
              <ListItemText primary='Configurações' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary='Perfil' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component='a' href='#nightmode'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Sidebar