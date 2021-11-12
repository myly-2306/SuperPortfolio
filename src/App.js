import './App.css';
import React, { Fragment} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 


import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Project } from './components/Project';
import  Contact  from './components/Contact';
import { Resume } from './components/Resume';

function App() {
  return (
    
    <Fragment>
    <Navbar />
    <Header /> 
    <br/>
    <br/>
    <Project />
    <Resume />
    <Contact />
    <Footer />
    </Fragment>
    
  );
}

export default App;
