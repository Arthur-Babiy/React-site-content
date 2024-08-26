import React, { useState, useEffect } from 'react';

const fetchPageContent = async (url) => {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(proxyUrl + url);
    const html = await response.text();
    return html;
  } catch (error) {
    console.error('Error fetching the page:', error);
    return null;
  }
};

const PageLoader = () => {
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    const url = 'https://g1.globo.com/sp/sao-paulo/noticia/2023/07/04/ze-celso-e-internado-apos-incendio-atingir-apartamento-onde-mora-em-sp.ghtml';
    fetchPageContent(url).then((content) => {
      setPageContent(content);
    });
  }, []);

  return (
    <div>
      <h1>Page Content</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
};

export default PageLoader;
