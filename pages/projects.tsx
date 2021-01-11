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
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MenuAppBar from '../src/Menu';

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
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  return (
    <Container maxWidth="xl">
      <MenuAppBar/>
      <Box my={10}>
        <div className={classes.root}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className={classes.title}>
                Your projects
              </Typography>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />
                  }
                  label="Enable dense"
                />
              </FormGroup>
              <div className={classes.demo}>
                <List dense={dense}>
                  {generate(
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
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
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
}
