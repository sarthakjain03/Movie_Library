import React from "react";
import { Pagination, createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
})

const CustomPaging = ({ setPage, numOfPages = 50 }) => {
    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0, 0)
    }

    return (
        <div className="flex justify-center w-full text-white mt-2 pb-4">
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    count={numOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    variant="outlined"
                    color="info"
                    hidePrevButton
                    hideNextButton
                />
            </ThemeProvider>
        </div>
    );
};

export default CustomPaging;
