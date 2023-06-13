import React from 'react';
import { Route, Routes }  from 'react-router-dom';
import Shows from './pages/Shows';
import ShowDetail from './pages/ShowDetail';
import SearchPage from './pages/SearchPage';
import Actors from './pages/Actors';
import ActorDetail from './pages/ActorDetail';
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Shows />} />
        <Route path='/shows/:id' element={<ShowDetail />} />
        <Route path='/search' element={<SearchPage />} />  
        <Route path='/people' element={<Actors />} />
        <Route path='/people/:id' element={ <ActorDetail /> } />
      </Routes>
    </div>
  );
}

export default App;
