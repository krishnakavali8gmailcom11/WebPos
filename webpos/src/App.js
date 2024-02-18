import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import CataloguePage from './components/Catalogue';
import OrderingPage from './components/Order';

const App = () => {
  return (
    <Router>
      <div>
        <h1>WebPos Gift Card App</h1>
    
        <Link to='/'>Home</Link>
        <Link to='/catalogue'>Catalogue</Link> 
         <Link to='/ordering'>Order</Link>
         <Routes>
         <Route path='/' element={<LoginPage/>} />
         <Route path='/catalogue' element={<CataloguePage/>} />
         <Route path='/ordering' element={<OrderingPage/>} />
        </Routes>
      </div>
    </Router>
  );
};




export default App;
