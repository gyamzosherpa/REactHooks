import { Add } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const deccrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4">UseState Example 1(onClick)</Typography>
        <Box sx={{ margin: '10px' }}>
          <Typography variant="text">value is {count}</Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ margin: '4px' }}
          onClick={increment}
        >
          <Add />
        </Button>

        <Button variant="contained" color="primary" onClick={deccrement}>
          <RemoveIcon />
        </Button>

        <br />
        <br />

        <Button variant="contained">
          <Link to="/useState2">useState EXample2</Link>
        </Button>
        <Box sx={{ textAlign: 'center', margin: '10px' }}>
          <Button variant="contained" color="warning">
            <Link to="/">Back to Home</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UseState;
