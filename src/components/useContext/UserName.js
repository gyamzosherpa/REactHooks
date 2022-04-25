import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewContext } from './UseContext';

const UserName = () => {
  const { username } = useContext(NewContext);

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <h1>User: {username}</h1>
      </Box>
      <Box sx={{ textAlign: 'center', margin: '10px' }}>
        <Button variant="contained" sx={{ backgroundColor: '#FFD93D' }}>
          <Link to="/">Back to home</Link>
        </Button>
      </Box>
    </>
  );
};

export default UserName;
