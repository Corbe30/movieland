// comp name and file name is same, good practise but not necessary
// instead of props, we used object destructuring and directly typed movie1
const MovieCard = ({ movie1 }) => { 
    return (
        <div className="movie">
            <div><p>{movie1.Year}</p></div>
            <div><img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title} /></div>
            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
        </div>
    )
}
