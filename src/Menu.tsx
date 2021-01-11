import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FaceIcon from '@material-ui/icons/Face';
import FolderIcon from '@material-ui/icons/Folder';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import useDarkMode from 'use-dark-mode';
import DiscordIcon from './Discord'
import ThemeIndicator from './ThemeSwitch';
import Link from './Link';
import Logo from './Logo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const darkMode = useDarkMode(true);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Box mt={1}>
            <Link href="/">
              <Logo/>
            </Link>
          </Box>
          </Typography>
          <div>
            <ThemeIndicator/>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <DiscordIcon color={darkMode.value ? "white" : "black"}/>
                <Box mx={2}>
                <Link style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                href="https://wokwi.com/discord">Discord
                </Link></Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                  <FaceIcon />
                  <Box mx={2}>
                  <Link style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                  href="/profile">Profile
                  </Link></Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <FolderIcon /><Box mx={2}>
                <Link style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                href="/projects">My projects
                </Link></Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <VpnKeyIcon />
                <Box mx={2}>{auth ? ' Logout' : 'Login'}</Box>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
