import React from 'react';
import './ThankYouPage.css';
import logo from './img/logo.png';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <header className="thank-you-header">
        <img src={logo} alt="Logo" className="thank-you-logo" />
      </header>
      <main className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your form has been submitted successfully. We will get back to you shortly.</p>
      </main>
    </div>
  );
};

export default ThankYouPage;
