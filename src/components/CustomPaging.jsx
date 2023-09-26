import React from "react";
import { Pagination, createTheme, ThemeProvider } from "@mui/material";

import { useStateContext } from "../context/ContextProvider";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
})

const CustomPaging = ({ setPage, numOfPages = 50 }) => {
    const { currentPage, setCurrentPage } = useStateContext()

    const handlePageChange = (event, page) => { // event handler function
        setPage(page)
        setCurrentPage(page)
        window.scroll(0, 0)
    }

    return (
        <div className="flex justify-center w-full text-white mt-2 pb-4">
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    count={numOfPages}
                    page={currentPage}
                    onChange={handlePageChange} // the page is automatically passed as the required 'page' argument in handlePageChange.
                    // here, the event is page change.
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
