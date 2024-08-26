import React, { useState, useEffect } from 'react';
import ContactForm from '../Form/ContactForm';
import './PageContent.css';

const PageContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/article.html')
      .then(response => response.text())
      .then(html => setContent(html))
      .catch(error => console.error('Error loading HTML:', error));
  }, []);

  return (
    <div className="page-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ContactForm />
    </div>
  );
};

export default PageContent;
