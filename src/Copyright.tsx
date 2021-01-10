import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Box mt={10}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © 2019-'}{new Date().getFullYear()}{' Wokwi  '}
      <Link href="/privacy-policy" color="secondary">
        Privacy Policy
      </Link>{'.'}
    </Typography>
    </Box>
  );
}
