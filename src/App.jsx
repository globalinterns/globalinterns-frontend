import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CampusAmbassador from './pages/CampusAmbassador';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-primary-bg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/campus-ambassador" element={<CampusAmbassador />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
