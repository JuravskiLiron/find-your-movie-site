import React from 'react';
import { Button } from '@mui/material';
import {  Container, Box, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import styles from './Header.module.scss';
import { ColorModeContext } from '../../App';

export const Header = () => {
  const {darkMode, setDarkMode} = React.useContext(ColorModeContext);

  console.log(darkMode);

  return (
    <Box
      sx={{
        bgcolor: 'color.default',
      }}
      classes={{ root: styles.root }}>
      <Container classes={{ root: styles.container }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h5"
          sx={{
            color: 'text.primary',
          }}>
          Find Your Movie
        </Typography>
        <div className={styles.rightSide}>
          <div className={styles.links}>
            <a href="/">
              <Button>Home</Button>
            </a>
            <a href="/">
              <Button>About Us</Button>
            </a>
            <IconButton
              sx={{ ml: 1, color: 'text.primary' }}
              onClick={() => setDarkMode(!darkMode)}
              color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </div>
      </Container>
    </Box>
  );
};
