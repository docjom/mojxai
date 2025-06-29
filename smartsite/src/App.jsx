import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmartSitesReplica from './pages/SmartSitesReplica'; // Move your current component to pages folder
import WebDesign from './pages/WebDesign';
import SEOServicesPage from './pages/SEOServicesPage';
import PPCMarketingPage from './pages/PPCMarketingPage';
import EmailMarketingPage from './pages/EmailMarketingPage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage';
import BrandingServicesPage from './pages/BrandingServicesPage';
import AboutUsPage from './pages/AboutUsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SmartSitesReplica />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/seo" element={<SEOServicesPage />} />
        <Route path="/ppc-marketing" element={<PPCMarketingPage />} />
        <Route path="/email-marketing" element={<EmailMarketingPage />} />
        <Route path="/social-media" element={<SocialMediaMarketingPage />} />
        <Route path="/branding-services" element={<BrandingServicesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;