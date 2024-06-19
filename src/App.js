import './App.css';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/Error';
import RentResidential from './pages/RentResidential';
import RentCommercial from './pages/RentCommercial';
import Plot from './pages/Plot';
import BuyResidential from './pages/BuyResidential';
import BuyCommercial from './pages/BuyCommercial';
import RentNowPayLater from './pages/RentNowPayLater';
import Signup from './pages/Signup';
import RentalAgreement from './pages/RentalAgreement';
import PropertyManagement from './pages/PropertyManagement';
import Partnership from './pages/Partnership';
import GetOwnerDetails from './pages/GetOwnerDetails';
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
        <Layout headerComponent={HomePage.extraHeaderComponent}>
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
        <Route path="/signup" element={
        <Layout>
          <Signup />
        </Layout>
        } />
        <Route path="/rentNowPayLater" element={
        <Layout headerComponent={HomePage.extraHeaderComponent}>
          <RentNowPayLater />
        </Layout>
        } />
        <Route path="/rentalAgreement" element={
        <Layout headerComponent={HomePage.extraHeaderComponent}>
          <RentalAgreement />
        </Layout>
        } />
        <Route path="/propertyManagement" element={
        <Layout >
          <PropertyManagement />
        </Layout>
        } />
        <Route path="/partnership" element={
        <Layout >
          <Partnership />
        </Layout>
        } />
        <Route path="/getOwnerDetails" element={
        <Layout>
          <GetOwnerDetails />
        </Layout>
        } />

    </Routes> 
  </Router>
 )
};

export default App;
