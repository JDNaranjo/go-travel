import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { mainListItems, secondaryListItems } from './listItem';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import MediaCard from './MediaCard';
import MediaCardLocal from './MediaCardLocal';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Juan Diego Naranjo & Carlos Restrepo | '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  palette: {
    background: {
      default: "white"
    }
  }
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open={open} sx={{backgroundColor: "#F6F7FB",  boxShadow: 'none'}}>
        <Toolbar>
        <IconButton
              onClick={toggleDrawer}
              edge="start"
              sx={{
                marginRight: '30px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              sx={{
                height: 40,
                width: 40,
              }}
              alt="Go-Travel logo"
              src={require('./img/logo.png')}
            />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color:"black", flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Go-Travel
          </Typography>
          <Search sx={{backgroundColor: "white"}}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: '#AFAFAF' }} />
            </SearchIconWrapper>
            <StyledInputBase
              style={{ color: 'black' }}
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton sx={{backgroundColor: "#FF6647", ml:2}} style={{color:"white"}}>
              <TuneOutlinedIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
        <Drawer variant="permanent" open={open} sx={{backgroundColor: "#F6F7FB"}}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              backgroundColor: "#F6F7FB"
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{backgroundColor: "#F6F7FB"}}>
            {mainListItems}
            <Box sx={{ mt: 50, ml: 1, mb: 1 }}>
              {secondaryListItems}
            </Box>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 1 }}
            >
                <ExploreOutlinedIcon sx={{color: "gray"}} />
                <Typography variant="body2" color="text.secondary"  >
                    Explore typical plans
                </Typography>
            </Stack>
            <br></br>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                  <MediaCard />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                  <MediaCard onClick={handleOpen} />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                  <MediaCard onClick={handleOpen} />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                  <MediaCard onClick={handleOpen} />
              </Grid>
            </Grid>
            <br></br>
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 1 }}
            >
                <ExploreOutlinedIcon sx={{color: "gray"}} />
                <Typography variant="body2" color="text.secondary"  >
                    Explore las Joyas
                </Typography>
            </Stack>
            <br></br>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                  <MediaCardLocal />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                  <MediaCardLocal />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                  <MediaCardLocal />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                  <MediaCardLocal />
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}