import React from 'react';
import { Route, Routes }  from 'react-router-dom';
import Shows from './pages/Shows';
import ShowDetail from './pages/ShowDetail';
import SearchPage from './pages/SearchPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path='/' element={<Shows />} />
        <Route path='/:id' element={<ShowDetail />} />
        <Route path='/search' element={<SearchPage />} />  
      </Routes>
      </div>
    </div>
  );
}

export default App;
