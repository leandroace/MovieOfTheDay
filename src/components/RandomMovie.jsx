import React, { useEffect, useState } from "react";
import api from "../services/api";

const RandomMovie = ({ onSelectMovie }) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomMovie = async () => {
    setIsLoading(true);
    const page = Math.floor(Math.random() * 500) + 1;
    const response = await api.get("/discover/movie", { params: { page } });
    const randomIndex = Math.floor(
      Math.random() * response.data.results.length
    );
    const randomMovie = response.data.results[randomIndex];
    onSelectMovie(randomMovie);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  return (
    <div className="text-center">
      {isLoading ? (
        <h2 className="text-xl text-center text-gray-400 mb-4">
          Loading a random movie...
        </h2>
      ) : (
        <button
          onClick={fetchRandomMovie}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition"
        >
          Load Another Movie
        </button>
      )}
    </div>
  );
};

export default RandomMovie;
