import './App.css';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/Error';
import RentResidential from './pages/RentResidential';
import RentCommercial from './pages/RentCommercial';
import Plot from './pages/Plot';
import Home from './pages/HomePage';
import BuyResidential from './pages/BuyResidential';
import BuyCommercial from './pages/BuyCommercial';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App(){
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      scroll.scrollToTop({ duration: 500 });
    }, [pathname]);
  
    return null;
  }
  return(
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={
        <Layout headerComponent={Home.extraHeaderComponent}>
          <HomePage />
        </Layout>
      } exact />
      <Route path="*" element={
        <Layout>
          <ErrorPage />
        </Layout>
      } />
      <Route path="/buyResidential" element={
        <Layout>
          <BuyResidential />
        </Layout>
      } />
      <Route path="/rentResidential" element={
        <Layout>
          <RentResidential />
        </Layout>
        } />
        <Route path="/plot" element={
          <Layout>
            <Plot />
          </Layout>
        } />
        <Route path="/buyCommercial" element={
          <Layout>
            <BuyCommercial />
          </Layout>
        } />
        <Route path="/rentCommercial" element={
        <Layout>
          <RentCommercial />
        </Layout>
        } />
    </Routes>
  </Router>
 )
};

export default App;
