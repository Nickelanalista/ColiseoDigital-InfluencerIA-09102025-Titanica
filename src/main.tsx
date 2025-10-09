import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-de-reembolso" element={<RefundPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
