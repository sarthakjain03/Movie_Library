import React, { useEffect, useState } from "react";
import axios from "axios";

import { MovieCard, Header, CustomPaging } from "../components";
import { useStateContext } from "../context/ContextProvider";

const Trending = () => {
  const {
    contentType,
    changeContentType,
    activeTrendingLink,
    handleTrendingLinks,
  } = useStateContext();
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1)
  
  const normalLink =
    "text-white border-[1px] py-1 px-5 rounded-md hover:text-black hover:bg-white font-pagehead font-medium md:mx-4";
  const activeLink =
    "border-[1px] py-1 px-5 rounded-md text-black bg-white font-pagehead font-medium md:mx-4";

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${contentType}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [contentType, page]);

  useEffect(() => {
    handleTrendingLinks("all")
    changeContentType("all")
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Header title="Trending" />
      <div className="flex justify-center">
        <div className="flex md:justify-center justify-around items-center my-4 w-3/4">
          <button
            type="button"
            className={activeTrendingLink.all ? activeLink : normalLink}
            onClick={() => {
              changeContentType("all");
              handleTrendingLinks("all");
            }}
          >
            ALL
          </button>
          <button
            type="button"
            className={activeTrendingLink.movie ? activeLink : normalLink}
            onClick={() => {
              changeContentType("movie");
              handleTrendingLinks("movie");
            }}
          >
            MOVIES
          </button>
          <button
            type="button"
            className={activeTrendingLink.tv ? activeLink : normalLink}
            onClick={() => {
              changeContentType("tv");
              handleTrendingLinks("tv");
            }}
          >
            TV SERIES
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {content &&
          content.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              rating={item.vote_average}
              media_type={item.media_type}
              language={item.original_language}
              air_date={item.first_air_date || item.release_date}
            />
          ))}
      </div>
      <CustomPaging setPage={setPage} />
    </div>
  );
};

export default Trending;
