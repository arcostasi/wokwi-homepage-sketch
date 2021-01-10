import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import MenuAppBar from '../src/Menu';

export default function About() {
  return (
    <Container maxWidth="xl">
      <MenuAppBar/>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
