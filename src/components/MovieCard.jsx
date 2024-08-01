export default function MovieCard(movieInfo) {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={movieInfo.moviePoster}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{movieInfo.movieName}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    )
}


