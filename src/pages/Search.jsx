import React, { useEffect, useState } from "react";
import { TextField, createTheme, ThemeProvider, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Header, MovieCard, CustomPaging } from "../components";
import axios from "axios";
import { useStateContext } from "../context/ContextProvider";

const Search = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numPages, setNumPages] = useState()
    const [searchQuery, setSearchQuery] = useState("")
    const [mediaType, setMediaType] = useState('movie')

    const { setCurrentPage } = useStateContext()

    const fetchSearchMovie = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&page=${page}`)

        setContent(data.results)
        setNumPages(data.total_pages)
    }

    const fetchSearchTv = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&page=${page}`)

        setContent(data.results)
        setNumPages(data.total_pages)
    }

    useEffect(() => {
        if(mediaType === 'movie'){
            fetchSearchMovie()
        } else{
            fetchSearchTv()
        }
        // eslint-disable-next-line
    }, [page])

    const handleSearchMovie = () => {
        setMediaType('movie')
        setPage(1)
        setCurrentPage(1)
        fetchSearchMovie()
    }

    const handleSearchTv = () => {
        setMediaType('tv')
        setPage(1)
        setCurrentPage(1)
        fetchSearchTv()
    }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div>
      <Header title="Search" />
      <div className="w-full flex justify-center items-center mt-5">
        <ThemeProvider theme={theme}>
          <div className="w-4/5 flex justify-around">
            <TextField
              id="filled-search"
              label="Search"
              type="search"
              variant="filled"
              className="w-2/3"
              sx={{
                backgroundColor: "black",
                border: "1px solid gray",
              }}
              InputLabelProps={{
                sx: {
                  color: "#fff",
                },
              }}
              inputProps={{
                sx: {
                  color: "white",
                  fontSize: "15px",
                },
              }}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <Button variant="outlined" startIcon={<SearchIcon />} onClick={handleSearchMovie}>
              Movies
            </Button>
            <Button variant="outlined" startIcon={<SearchIcon />} onClick={handleSearchTv}>
              TV Series
            </Button>
          </div>
        </ThemeProvider>
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
              media_type={mediaType}
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

export default Search;
