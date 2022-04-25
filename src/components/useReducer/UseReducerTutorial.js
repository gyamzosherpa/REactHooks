import { Box, Button } from '@mui/material';
import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText };
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <h1>{state.count}</h1>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            dispatch({ type: 'INCREMENT' });
            dispatch({ type: 'toggleShowText' });
          }}
        >
          Click Here
        </Button>

        {state.showText && <p>This is a text</p>}
      </Box>
      <Box sx={{ textAlign: 'center', margin: '10px' }}>
        <Button variant="contained" color="warning">
          <Link to="/">Back to Home</Link>
        </Button>
      </Box>
    </>
  );
};

export default UseReducerTutorial;
