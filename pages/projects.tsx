import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import TablePagination from "@material-ui/core/TablePagination";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import CodeIcon from '@material-ui/icons/Code';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MenuAppBar from '../src/Menu';
import Search from '../src/Search';

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
  formGroup: {
    alignItems: 'right'
  }
}));

function generate(element: any) {
  const list = [...Array(50).keys()];
  const data = paginate(list, 5, 10);
  return data.map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function paginate(array: any, index: number, size: number) {
  // Transform values
  index = Math.abs(index);
  index = index > 0 ? index - 1 : index;
  size = size < 1 ? 1 : size;

  // Filter
  return [...(array.filter((value: any, n: number) => {
    return (n >= (index * size)) && (n < ((index+1) * size))
  }))]
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function InteractiveList() {
  const classes = useStyles();

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
                  {generate(
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CodeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={"Arduino project name..."}
                        secondary={getRandomInt(2, 8) + " days ago"}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>,
                  )}
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
