const useGenres = (selected) => {
    if(selected.length < 1) return ""

    const genreIds = selected.map((g) => g.id)
    return genreIds.reduce((acc, curr) => acc + "," + curr)
}

export default useGenres