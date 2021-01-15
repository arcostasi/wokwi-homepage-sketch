import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import TablePagination from "@material-ui/core/TablePagination";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import CodeIcon from '@material-ui/icons/Code';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuAppBar from '../src/Menu';
import Search from '../src/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  cover: {

  },
  formGroup: {
    alignItems: 'right'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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

export default function InteractiveList() {
  const classes = useStyles();
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpand1Click = () => {
    setExpanded1(!expanded1);
  };

  const handleExpand2Click = () => {
    setExpanded2(!expanded2);
  };

  return (
    <Container maxWidth="xl">
      <MenuAppBar/>
      <Box my={8}>
        <div className={classes.root}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className={classes.title}>
                Your projects
              </Typography>
              <Box my={1}>
                <Search/>
              </Box>
              <div className={classes.demo}>
                <List>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                     <ListItemText
                      primary={"fastled-matrix-project-1.ino"}
                      secondary={"2 days ago"}
                    />
                     <ListItemSecondaryAction>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded1,
                        })}
                        onClick={handleExpand1Click}
                        aria-expanded={expanded1}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                      <IconButton aria-label="favorite">
                        <StyledBadge badgeContent={6} color="secondary">
                          <FavoriteIcon />
                        </StyledBadge>
                      </IconButton>
                      <IconButton aria-label="edit">
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Collapse in={expanded1} timeout="auto" unmountOnExit>
                    <CardActionArea>
                      <CardContent>
                        <CardMedia
                          className={classes.cover}
                          component="img"
                          alt="Project title..."
                          image="https://thumbs.wokwi.com/api/render.png?service=wokwi&path=/arduino/projects/283144661871100428/thumb&wait=elements"
                          title="Project title..."
                        />
                      </CardContent>
                    </CardActionArea>
                  </Collapse>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                     <ListItemText
                      primary={"fastled-matrix-project-2.ino"}
                      secondary={"5 days ago"}
                    />
                     <ListItemSecondaryAction>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded2,
                        })}
                        onClick={handleExpand2Click}
                        aria-expanded={expanded2}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                      <IconButton aria-label="favorite">
                        <StyledBadge badgeContent={10} color="secondary">
                          <FavoriteIcon />
                        </StyledBadge>
                      </IconButton>
                      <IconButton aria-label="edit">
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Collapse in={expanded2} timeout="auto" unmountOnExit>
                    <CardActionArea>
                      <CardContent>
                        <CardMedia
                          className={classes.cover}
                          component="img"
                          alt="Project title..."
                          image="https://thumbs.wokwi.com/api/render.png?service=wokwi&path=/arduino/projects/287735624539046412/thumb&wait=elements"
                          title="Project title..."
                        />
                      </CardContent>
                    </CardActionArea>
                  </Collapse>
                </List>
                <TablePagination
                  component="nav"
                  page={0}
                  rowsPerPage={10}
                  count={100}
                  onChangePage={(value) => { console.log(value); }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
}
