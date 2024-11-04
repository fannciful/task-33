import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
    return(
        <ErrorBoundary>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contacts' element={<Contacts/>} />
                <Route path='*' element={<div>Oops, no such page :(</div>} />
            </Routes>
        </ErrorBoundary>
    );
}

export default App;