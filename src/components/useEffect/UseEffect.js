import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <h2>UseEffect EXample</h2>
        <h1>I've rendered {count} times!</h1>
      </Box>
      <Box sx={{ textAlign: 'center', margin: '10px' }}>
        <Button variant="contained" color="warning">
          <Link to="/useEffect2">Axios useEffect Example</Link>
        </Button>
      </Box>
      <Box sx={{ textAlign: 'center', margin: '10px' }}>
        <Button variant="contained" color="warning">
          <Link to="/">Back to Home</Link>
        </Button>
      </Box>
    </>
  );
};

export default UseEffect;
