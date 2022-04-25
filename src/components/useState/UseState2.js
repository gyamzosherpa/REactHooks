import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Usestate2 = () => {
  const [value, setValue] = useState('abd');

  const changeValue = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4">useState Example2(onChange)</Typography>
        <TextField onChange={changeValue} />
        <TextField value={value} sx={{ marginLeft: '10px' }} />
        <Box>
          <Button sx={{ margin: '10px' }} variant="contained">
            <Link sx={{}} to="/useState">
              back to useState EXample1
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Usestate2;
