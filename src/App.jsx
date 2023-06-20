import React, { useState } from 'react';
import { Route, Routes }  from 'react-router-dom';
import Shows from './pages/Shows';
import ShowDetail from './pages/ShowDetail';
import SearchPage from './pages/SearchPage';
import Actors from './pages/Actors';
import ActorDetail from './pages/ActorDetail';
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import Favorites from './pages/Favorites'
import FavoritesContext from './context/FavoritesContext';


function App() {
  const [favorites, setFavorites] = useState([])



  const saveToLocalStorage = (item) => {
      localStorage.setItem('favorite-movie', JSON.stringify(item));
    } 

  const toggleFavoriteMovie = (movie) => {
    if (favorites.includes(movie)) {
      const newFavouriteMovie = favorites.filter((item) => item.id !== movie.id)
      setFavorites(newFavouriteMovie)
      saveToLocalStorage(newFavouriteMovie)
    }
    else {
      const newFavouriteMovie = [...favorites, movie]
      setFavorites(newFavouriteMovie)
      saveToLocalStorage(newFavouriteMovie)
    }
  }

  return (
    <div>
      <Header />
      <FavoritesContext.Provider value={{
        favorites: favorites,
        toggleFavoriteMovie,
        setFavorites,
        }}>
          <Routes>
            <Route path='/' element={<Shows />} />
            <Route path='/shows/:id' element={<ShowDetail />} />
            <Route path='/search' element={<SearchPage />} />  
            <Route path='/people' element={<Actors />} />
            <Route path='/people/:id' element={<ActorDetail />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </FavoritesContext.Provider>
    </div>
  );
}

export default App;
