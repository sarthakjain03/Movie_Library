import React from "react";
import { TextField, createTheme, ThemeProvider, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  return (
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
              fontSize: "20px",
            },
          }}
        />
        <Button variant="outlined">
          <SearchIcon fontSize="large" />
          Movies
        </Button>
        <Button variant="outlined">
          <SearchIcon fontSize="large" />
          TV Series
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default SearchBar;
