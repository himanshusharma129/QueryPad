import React, { Suspense, withTheme, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Loader from './components/Loader.tsx';

const Home = lazy(() => import("./pages/Home.tsx"));

const StyledAppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color-secondary);
`;

function App() {
  return (
    <StyledAppContainer>
      <Suspense
        fallback={
          <Loader />
        }
      >
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </StyledAppContainer>
  );
}

export default App;
