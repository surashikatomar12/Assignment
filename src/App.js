import React from 'react';
import UserList from './components/Userlist';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" fontSize='39px'>
            User List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box marginTop={'30px'}>
        <UserList />
        </Box>
      </Container>
    </div>
  );
};

export default App;
