
// npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const MovieDetails = () => {
  const [ individualMovie, setIndividualMovie ] = useState({});

  // useParams listens for the part of the url that matches the param we set in path of Route
  const movieID = useParams();

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID.movieID}`,
      params: {
        api_key: "1ddda46df655145abd5e7b35368e7a4b"
      }

    }).then((response) => {
      setIndividualMovie(response.data);
    })
  }, [movieID.movieID])

  // destructuring individualMovie like this makes our code clearer
  const { original_title, tagline, overview, poster_path } = individualMovie;
  return(
    <div className="poster">
      <div className="description">
        <h2>{original_title}</h2>
        <h3>{tagline}</h3>
        <p>{overview}</p>
      </div>
      <div className="poster-image">
        {
          individualMovie ?
          (
            <img 
              src={`http://image.tmdb.org/t/p/w500/${poster_path}`} 
              alt={`Movie poster for the movie: ${original_title}`} 
            />
          )
          : null
        }
      </div>
    </div>
  )
}

export default MovieDetails;