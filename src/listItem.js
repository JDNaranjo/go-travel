import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton sx={{ height: 56, backgroundColor: "#FF6647"}}>
        <ListItemIcon>
            <HomeOutlinedIcon style={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{
            color: 'white',
            }}
        />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Planning" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ExploreOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Explore" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PermIdentityOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PowerSettingsNewOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);