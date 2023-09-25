import React, { useState, useEffect } from 'react'

import { Header, Genres, MovieCard } from "../components";
import axios from "axios";
import useGenres from "../hooks/useGenres";

const TvSeries = () => {
  const [tvContent, setTvContent] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([]);
  const tvGenreIdsToShow = useGenres(selectedGenres)

  const fetchTvList = async (genreIds) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreIds}`
    );

    setTvContent(data.results);
  };

  useEffect(() => {
    fetchTvList(tvGenreIdsToShow)
  }, [tvGenreIdsToShow])

  return (
    <div>
      <Header title="Tv Series" />
      <Genres type='tv' setGenres={setGenres} genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
      <div className="flex flex-wrap justify-center items-center">
        {tvContent &&
          tvContent.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              rating={item.vote_average}
              media_type={"tv"}
              language={item.original_language}
              air_date={item.first_air_date || item.release_date}
            />
          ))}
      </div>
    </div>
  )
}

export default TvSeries