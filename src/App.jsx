import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CampusAmbassador from './pages/CampusAmbassador';

import WebDevelopmentProgram from './pages/WebDevelopmentProgram';
import IntroducingAIProgram from './pages/IntroducingAIProgram';
import ArtificialIntelligenceProgram from './pages/ArtificialIntelligenceProgram';
import MachineLearningProgram from './pages/MachineLearningProgram';

import MachineLearningWithPythonProgram from './pages/MachineLearningWithPythonProgram';
import DataAnalysisWithPythonProgram from './pages/DataAnalysisWithPythonProgram';
import PythonForDataScienceProgram from './pages/PythonForDataScienceProgram';
import DataScienceProgram from './pages/DataScienceProgram';

import AndroidDevelopmentProgram from './pages/AndroidDevelopmentProgram';

import CyberSecurityProgram from './pages/CyberSecurityProgram';

import JavaFundamentalsProgram from './pages/JavaFundamentalsProgram';
import JavaProgram from './pages/JavaProgram';

import PythonProgram from './pages/PythonProgram';

import EmbeddedSystemsProgram from './pages/EmbeddedSystemsProgram';

import IoTProgram from './pages/IoTProgram';

import HybridVehiclesProgram from './pages/HybridVehiclesProgram';

import RoboticsProgram from './pages/RoboticsProgram';

import ConstructionPlanningProgram from './pages/ConstructionPlanningProgram';

import ICEngineDesignProgram from './pages/ICEngineDesignProgram';

import HumanResourcesProgram from './pages/HumanResourcesProgram';

import FinanceProgram from './pages/FinanceProgram';

import SalesMarketingProgram from './pages/SalesMarketingProgram';

import DigitalMarketingProgram from './pages/DigitalMarketingProgram';

import StockMarketProgram from './pages/StockMarketProgram';

import BiotechnologyProgram from './pages/BiotechnologyProgram';

import PsychologyProgram from './pages/PsychologyProgram';

import MedicalCodingProgram from './pages/MedicalCodingProgram';
import FindDreamJob from './pages/FindDreamJob';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-primary-bg">
                <Navbar />
                <SocialSidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/campus-ambassador" element={<CampusAmbassador />} />

                    <Route path="/program/introducing-ai" element={<IntroducingAIProgram />} />
                    <Route path="/program/machine-learning-with-python" element={<MachineLearningWithPythonProgram />} />
                    <Route path="/program/data-analysis-with-python" element={<DataAnalysisWithPythonProgram />} />
                    <Route path="/program/web-development" element={<WebDevelopmentProgram />} />
                    <Route path="/program/artificial-intelligence" element={<ArtificialIntelligenceProgram />} />
                    <Route path="/program/machine-learning" element={<MachineLearningProgram />} />
                    <Route path="/program/data-science" element={<DataScienceProgram />} />
                    <Route path="/program/python-for-data-science" element={<PythonForDataScienceProgram />} />
                    <Route path="/program/java-fundamentals" element={<JavaFundamentalsProgram />} />
                    <Route path="/program/android-development" element={<AndroidDevelopmentProgram />} />
                    <Route path="/program/cyber-security" element={<CyberSecurityProgram />} />
                    <Route path="/program/java" element={<JavaProgram />} />
                    <Route path="/program/python" element={<PythonProgram />} />
                    <Route path="/program/embedded-systems" element={<EmbeddedSystemsProgram />} />
                    <Route path="/program/internet-of-things" element={<IoTProgram />} />
                    <Route path="/program/hybrid-electric-vehicle" element={<HybridVehiclesProgram />} />
                    <Route path="/program/robotics" element={<RoboticsProgram />} />
                    <Route path="/program/construction-planning" element={<ConstructionPlanningProgram />} />
                    <Route path="/program/ic-engine-design" element={<ICEngineDesignProgram />} />
                    <Route path="/program/human-resources" element={<HumanResourcesProgram />} />
                    <Route path="/program/finance" element={<FinanceProgram />} />
                    <Route path="/program/sales-marketing" element={<SalesMarketingProgram />} />
                    <Route path="/program/digital-marketing" element={<DigitalMarketingProgram />} />
                    <Route path="/program/stock-market" element={<StockMarketProgram />} />
                    <Route path="/program/industrial-biotechnology" element={<BiotechnologyProgram />} />
                    <Route path="/program/psychology" element={<PsychologyProgram />} />
                    <Route path="/program/medical-coding" element={<MedicalCodingProgram />} />
                    <Route path="/find-dream-job" element={<FindDreamJob />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
