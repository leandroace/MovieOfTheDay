import React, { useEffect, useState } from "react";
import api from "../services/api";

const Recommendation = ({ movieId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (movieId) {
        const response = await api.get(`/movie/${movieId}/recommendations`);
        setRecommendations(response.data.results);
      }
    };

    fetchRecommendations();
  }, [movieId]);

  return (
    <div className="w-full">
      <h4 className="text-xl font-bold mb-4">Recommendations:</h4>
      <div className="flex space-x-4 overflow-x-auto no-scrollbar">
        {recommendations.map((rec) => (
          <img
            key={rec.id}
            src={`https://image.tmdb.org/t/p/w300${rec.poster_path}`}
            alt={rec.title}
            className="h-64 flex-shrink-0 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
