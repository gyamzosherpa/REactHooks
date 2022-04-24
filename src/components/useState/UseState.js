import { Add } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

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
      <Typography variant="h4">UseState Example 1(onClick)</Typography>
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
      <Box sx={{ margin: '10px' }}>
        <Typography variant="text">value is {count}</Typography>
      </Box>
    </>
  );
};

export default UseState;
