import React, { useState } from "react";
import RandomMovie from "./components/RandomMovie";
import MovieDetails from "./components/MovieDetails";
import Recommendation from "./components/Recommendation";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-black bg-opacity-80 fixed top-0 left-0 w-full z-10 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-500">
            🎬 Movie recommendation of the day
          </h1>
        </div>
      </header>

      {/* Main Content - Horizontal Layout */}
      <main className="flex-grow pt-16 flex">
        {/* Random Movie Section */}
        <div className="w-1/3 bg-gray-800 p-4 overflow-y-auto">
          <RandomMovie onSelectMovie={setSelectedMovie} />
        </div>

        {/* Movie Details Section */}
        {selectedMovie && (
          <div className="w-1/3 bg-gray-700 p-4 overflow-y-auto">
            <MovieDetails movie={selectedMovie} />
          </div>
        )}

        {/* Recommendations Section */}
        {selectedMovie && (
          <div className="flex-grow bg-gray-900 p-4 overflow-y-auto">
            <Recommendation movieId={selectedMovie.id} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
