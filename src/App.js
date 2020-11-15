import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';

function App() {
  return (
    <div className="app">
      <Header/>
      { routes }
      <Footer/>
    </div>
  );
}

export default App;