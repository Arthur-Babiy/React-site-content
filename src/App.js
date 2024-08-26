import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageContent from './components/PageContent/PageContent'
import ThankYouPage from './components/ThankYouPage/ThankYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
