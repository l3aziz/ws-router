import React,{useState} from 'react';
import './App.css'; 
import { data } from './data';
import MovieListe from './components/MovieListe';
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import WatchPage from "./components/WatchPage";
import Layout from './Layout';

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [movie, setMovie] = useState(data);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route
          path="movie"
          element={
            <MovieListe
              setMovie={setMovie}
              rating={rating}
              data={movie}
              search={search}
            />
          }
        />
        <Route path="product/:id" element={<WatchPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
