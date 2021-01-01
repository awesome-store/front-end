import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import { useDispatch } from 'react-redux';
import { authInit } from './redux/reducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authInit());
  }, [dispatch]);
  return (
    <div className="app">
      <Header/>
        <Routes />
      <Footer/>
    </div>
  );
}

export default App;