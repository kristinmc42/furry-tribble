// npm modules
import { useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Components
import Catalogue from "./components/Catalogue";
import MovieDetails from "./components/MovieDetails";

const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "1ddda46df655145abd5e7b35368e7a4b",
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1999,
      }
    })
    .then((response) => {
      setMovies(response.data.results);
    })
  }, []);


  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          {/* built in react property style, can change the style of an element */}
          <Link to="/" style={{ textDecoration: "none"}}>
            <h1>Hackflix</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Catalogue movies={movies}/>}/>
          <Route path="movie/:movieID" element={<MovieDetails />} />
        </Routes>

       
      </div>
    </BrowserRouter>
  );
}

export default App;
