const App = () => {
    const [movies, setMovies] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('spider-man');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); // calls api
        const data = await response.json(); // takes a Response stream and reads it to completion.
        
        setMovies(data.Search)
    }

    React.useEffect(() => {
        searchMovies(searchTerm)
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
            <input  placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
            />
            <img
                src = "search.svg"
                alt = "search"
                onClick={() => {searchMovies(searchTerm)}}
            />
            </div>

            <div className="container">
                {
                    movies.map((movieData, i) => {
                        return <MovieCard movie1={movieData}/>
                    })
                }
                    
            </div>

        </div>
    )
}