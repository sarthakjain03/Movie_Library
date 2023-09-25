import React, { useEffect, useState } from "react";

import { Header, Genres, MovieCard, CustomPaging } from "../components";
import axios from "axios";
import useGenres from "../hooks/useGenres";

const Movies = () => {
  const [movieContent, setMovieContent] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([]);
  const movieGenreIdsToShow = useGenres(selectedGenres)
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState()

  const fetchMovieList = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${movieGenreIdsToShow}`
    );

    setMovieContent(data.results);
    setNumPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovieList()
    // eslint-disable-next-line
  }, [movieGenreIdsToShow, page])

  return (
    <div>
      <Header title="Movies" />
      <Genres type='movie' setGenres={setGenres} genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setPage={setPage} />
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
      { 
        numPages>1 && <CustomPaging setPage={setPage} numOfPages={numPages} />
      }
    </div>
  );
};

export default Movies;
