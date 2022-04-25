import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UseEffect2 = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('updated');
    axios.get(`https://jsonplaceholder.typicode.com/comments/`).then((res) => {
      setData(res.data[4].email);
    });
  }, []);
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Axios useEffect Example</h2>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4">{data}</Typography>
        <Typography variant="h4">{count}</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
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

export default UseEffect2;
