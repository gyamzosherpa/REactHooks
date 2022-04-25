import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import UseEffect from './components/useEffect/UseEffect';
import UseReducerTutorial from './components/useReducer/UseReducerTutorial';
import UseState from './components/useState/UseState';
import Usestate2 from './components/useState/UseState2';

const Routes1 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/useState" element={<UseState />} />
          <Route exact path="/useState2" element={<Usestate2 />} />
          <Route exact path="/useReducer" element={<UseReducerTutorial />} />
          <Route exact path="/useEffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routes1;
