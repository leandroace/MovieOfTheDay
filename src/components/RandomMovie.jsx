import React, { useEffect, useState } from "react";
import api from "../services/api";

const RandomMovie = ({ onSelectMovie }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Nuevo estado para manejar errores

  const fetchRandomMovie = async () => {
    setIsLoading(true);
    setError(null); // Limpiar el estado de error al intentar nuevamente
    try {
      const page = Math.floor(Math.random() * 500) + 1;
      const response = await api.get("/discover/movie", { params: { page } });
      const results = response?.data?.results || [];
      if (results.length === 0) throw new Error("No movies found");

      const randomIndex = Math.floor(Math.random() * results.length);
      const randomMovie = results[randomIndex];
      onSelectMovie(randomMovie);
    } catch (err) {
      console.error("Failed to fetch movie:", err);
      setError("Failed to load a random movie. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
      ) : error ? ( // Mostrar mensaje de error si existe
        <div>
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchRandomMovie}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition"
          >
            Try Again
          </button>
        </div>
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
