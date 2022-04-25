import { Box } from '@mui/material';
import React, { createContext, useState } from 'react';
import ChangeName from './ChangeName';
import UserName from './UserName';

export const NewContext = createContext(null);

const UseContext = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        {/* context is wrapping all components in one, context is basically a collection of state ,
          can have access to all the states, components,etc
      */}
        <NewContext.Provider value={{ username, setUsername }}>
          <ChangeName /> <UserName />
        </NewContext.Provider>
      </Box>
    </>
  );
};

export default UseContext;
