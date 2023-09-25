import React, { useState, useEffect } from 'react'

import { Header, Genres, MovieCard, CustomPaging } from "../components";
import axios from "axios";
import useGenres from "../hooks/useGenres";

const TvSeries = () => {
  const [tvContent, setTvContent] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([]);
  const tvGenreIdsToShow = useGenres(selectedGenres)
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState()

  const fetchTvList = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${tvGenreIdsToShow}`
    );

    setTvContent(data.results);
    setNumPages(data.total_pages);
  };

  useEffect(() => {
    fetchTvList()
    // eslint-disable-next-line
  }, [tvGenreIdsToShow, page])

  return (
    <div>
      <Header title="Tv Series" />
      <Genres type='tv' setGenres={setGenres} genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setPage={setPage} />
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
      { 
        numPages>1 && <CustomPaging setPage={setPage} numOfPages={numPages} />
      }
    </div>
  )
}

export default TvSeries