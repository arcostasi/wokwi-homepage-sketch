import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuAppBar from '../src/Menu';
import Link from '../src/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 600,
    // Promote the list into his own layer on Chrome.
    // This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  titleBarTop: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
  },
  img: {
    height: '100%',
  },
  icon: {
    color: 'white',
    margin: 5
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const itemData = [
  {
    img: 'https://thumbnails.wokwi.workers.dev/projects/286426178529526285/thumbnail.jpg?tile&t=1611039217700',
    link: 'https://wokwi.com/arduino/projects/286426178529526285',
    title: 'bumpmap16x16 Heart.ino',
    author: '@ldirko',
    updated: 'about 16 hours ago',
    likes: 4,
    featured: false,
  },
  {
    img: 'https://thumbnails.wokwi.workers.dev/projects/287332871040926216/thumbnail.jpg?tile&t=1610837001558',
    link: 'https://wokwi.com/arduino/projects/287332871040926216',
    title: 'Sample - Traffic light with rings.ino',
    author: '@',
    updated: '3 days ago',
    likes: 3,
    featured: false,
  },
  {
    img: 'https://thumbnails.wokwi.workers.dev/projects/287302452979433992/thumbnail.jpg?tile&t=1610832769871',
    link: 'https://wokwi-new-git-new-project-page.wokwi.vercel.app/arduino/projects/287302452979433992',
    title: 'rings1629_Sol.ino',
    author: '@',
    updated: '3 days ago',
    likes: 2,
    featured: false,
  },
  {
    img: 'https://thumbnails.wokwi.workers.dev/projects/287605854602002957/thumbnail.jpg?tile&t=1610573434610',
    link: 'https://wokwi.com/arduino/projects/287605854602002957',
    title: 'clokwi_32x32_fire.ino',
    author: '@',
    updated: '4 days ago',
    likes: 2,
    featured: false,
  },
  {
    img: 'https://thumbnails.wokwi.workers.dev/projects/287735624539046412/thumbnail.jpg?tile&t=1610664924924',
    link: 'https://wokwi.com/arduino/projects/287735624539046412',
    title: 'DiscoStrobe.ino',
    author: '@',
    updated: '5 days ago',
    likes: 2,
    featured: false,
  },
  {
    img: 'https://thumbnails.wokwi.workers.dev/projects/287153869183517197/thumbnail.jpg?tile&t=1610124446723',
    link: 'https://wokwi.com/arduino/projects/287153869183517197',
    title: 'led-strip-16.ino',
    author: '@arcostasi',
    updated: '6 days ago',
    likes: 1,
    featured: false,
  },
  {
    img: 'https://thumbnails.wokwi.workers.dev/projects/286806448514531852/thumbnail.jpg?tile&t=1610118810351',
    link: 'https://wokwi.com/arduino/projects/286806448514531852',
    title: 'ds1307.ino',
    author: '@',
    updated: '7 days ago',
    likes: 0,
    featured: false,
  },
  {
    img: 'https://thumbnails.wokwi.workers.dev/projects/286987991492067852/thumbnail.jpg?tile&t=1609951926462',
    link: 'https://wokwi.com/arduino/projects/286987991492067852',
    title: 'neopixel-ring.ino',
    author: '@',
    updated: '8 days ago',
    likes: 0,
    featured: false,
  },
];

export default function AdvancedGridList() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="xl">
      <MenuAppBar/>
      <Box my={10}>
        <div className={classes.root}>
          <GridList spacing={1} className={classes.gridList}>
            {itemData.map((item) => (
              <GridListTile key={item.img}
                cols={item.featured ? 2 : 1}
                rows={item.featured ? 2 : 1}>
                <a href={item.link}>
                  <img src={item.img} alt={item.title} className={classes.img} />
                </a>
                <GridListTileBar
                  title={item.title}
                  titlePosition="top"
                  actionIcon={
                    <IconButton
                      aria-label="favorite"
                      className={classes.icon}>
                      <StyledBadge
                        badgeContent={item.likes}
                        color="secondary">
                        <FavoriteIcon />
                      </StyledBadge>
                    </IconButton>
                  }
                  actionPosition="right"
                  className={classes.titleBarTop}
                />
                <GridListTileBar
                  title={item.updated}
                  titlePosition="bottom"
                  actionIcon={
                    <IconButton
                      aria-label="more"
                      className={classes.icon}
                      aria-controls="more-menu"
                      aria-haspopup="true"
                      onClick={handleClick}>
                      <MoreIcon />
                    </IconButton>
                  }
                  actionPosition="right"
                  className={classes.titleBar}
                />
                <Menu
                  id="more-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <EditIcon /><Box mx={2}>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                      href="#rename">Rename
                    </Link></Box>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <DeleteIcon /><Box mx={2}>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                      href="#delete">Delete
                    </Link></Box>
                  </MenuItem>
                </Menu>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Box>
    </Container>
  );
}
