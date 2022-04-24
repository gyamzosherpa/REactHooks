import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Usestate2 = () => {
  const [value, setValue] = useState('abd');

  const changeValue = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h4">Example 2(onChange)</Typography>
      <TextField onChange={changeValue} />
      <TextField value={value} sx={{ marginLeft: '10px' }} />
    </>
  );
};

export default Usestate2;
