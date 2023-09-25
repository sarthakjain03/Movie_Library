import React, { useEffect, useState } from "react";

import { Header, Genres, MovieCard } from "../components";
import axios from "axios";
import useGenres from "../hooks/useGenres";

const Movies = () => {
  const [movieContent, setMovieContent] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([]);
  const movieGenreIdsToShow = useGenres(selectedGenres)

  const fetchMovieList = async (genreIds) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreIds}`
    );

    setMovieContent(data.results);
  };

  useEffect(() => {
    fetchMovieList(movieGenreIdsToShow)
  }, [movieGenreIdsToShow])

  return (
    <div>
      <Header title="Movies" />
      <Genres type='movie' setGenres={setGenres} genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
      <div className="flex flex-wrap justify-center items-center">
        {movieContent &&
          movieContent.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              rating={item.vote_average}
              media_type={"movie"}
              language={item.original_language}
              air_date={item.first_air_date || item.release_date}
            />
          ))}
      </div>
    </div>
  );
};

export default Movies;
