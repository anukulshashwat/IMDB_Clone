import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import MovieDetail from "./pages/movieDetail/movieDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="/*" element={<h1>Error page</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
