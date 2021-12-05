import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import NewProject from './components/NewProject';
import DashboardPanel from './components/DashboardPanel';


function App() {
    
  return (
    <BrowserRouter>
         <Routes>
           <Route index element={<Home />}/>
            <Route path="/NewProject" element={<NewProject />}/>
            <Route path="/DashboardPanel" element={<DashboardPanel />}/>
          </Routes>
       </BrowserRouter>
  );
}

export default App;

