import React, { useEffect, useState } from "react";
import axios from "axios";

import { MovieCard, Header } from "../components";
import { useStateContext } from "../context/ContextProvider";

const Trending = () => {
  const {
    contentType,
    changeContentType,
    activeTrendingLink,
    handleTrendingLinks,
  } = useStateContext();
  const [content, setContent] = useState([]);

  const fetchTrending = async (currentContentType) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${currentContentType}/week?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending(contentType);
  }, [contentType]);

  useEffect(() => {
    handleTrendingLinks("all")
  })

  const normalLink =
    "text-white border-[1px] py-1 px-5 rounded-md hover:text-black hover:bg-white font-pagehead font-medium";
  const activeLink =
    "border-[1px] py-1 px-5 rounded-md text-black bg-white font-pagehead font-medium";

  return (
    <div>
      <Header title="Trending" />
      <div className="flex justify-center">
        <div className="flex justify-around items-center my-4 md:w-[30%]">
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
    </div>
  );
};

export default Trending;
