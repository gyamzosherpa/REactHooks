import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { NewContext } from './UseContext';

const ChangeName = () => {
  const { setUsername } = useContext(NewContext);

  return (
    <>
      <h2>useContext</h2>
      <Box sx={{ textAlign: 'center' }}>
        <TextField
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </Box>
    </>
  );
};

export default ChangeName;
