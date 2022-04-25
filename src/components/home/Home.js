import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="outlined" sx={{ backgroundColor: '#FFD93D' }}>
          <Link to="/useState">useState</Link>
        </Button>
      </Box>

      <Box sx={{ textAlign: 'center', margin: '10px' }}>
        <Button variant="contained" sx={{ backgroundColor: '#FFD93D' }}>
          <Link to="/useEffect">useEffect</Link>
        </Button>
      </Box>

      <Box sx={{ textAlign: 'center', margin: '10px' }}>
        <Button variant="contained" sx={{ backgroundColor: '#FFD93D' }}>
          <Link to="/useReducer">useReducer</Link>
        </Button>
      </Box>

      <Box sx={{ textAlign: 'center', margin: '10px' }}>
        <Button variant="contained" sx={{ backgroundColor: '#FFD93D' }}>
          <Link to="/useContext">useContext</Link>
        </Button>
      </Box>
    </>
  );
};

export default Home;
