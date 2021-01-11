import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import MenuAppBar from '../src/Menu';

export default function Profile() {
  return (
    <Container maxWidth="xl">
      <MenuAppBar/>
      <Box my={10}>
        <Typography variant="h4" component="h3" gutterBottom>
          Profile
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
