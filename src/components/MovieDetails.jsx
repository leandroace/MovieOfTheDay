import React from "react";

const MovieDetails = ({ movie }) => {
  if (!movie) return <p>No movie selected.</p>;

  return (
    <div className="mt-4 flex flex-col items-center">
      <img
        className="w-full rounded-lg shadow-lg mb-4"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="text-center">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-gray-300 text-sm mt-2">{movie.overview}</p>
        <p className="text-gray-400 text-sm mt-2">
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p className="text-gray-400 text-sm">
          <strong>Rating:</strong> {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
