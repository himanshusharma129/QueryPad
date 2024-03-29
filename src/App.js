import React, { Suspense, withTheme, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Loader from './components/base/Loader';
import GlobalStyles from './GlobalStyles.js';

const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));

const StyledAppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color-secondary);
  overflow: hidden;
  min-width: 430px;
`;

function App() {
  return (
    <StyledAppContainer>
      <Suspense
        fallback={
          <Loader />
        }
      > 
        <GlobalStyles />
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </StyledAppContainer>
  );
}

export default App;
