import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';

const App = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex-1 overflow-y-auto p-5">
      <News />
    </div>
    <Footer />
  </div>
);

export default App;
