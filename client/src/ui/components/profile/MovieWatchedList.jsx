import {Star,Check } from 'lucide-react';
import Image from '/download.jpeg'

const MovieWatchedList = () => {
  const watchedMovies = [
    {
      id: "6",
      title: "John Wick",
      description: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
      releaseDate: "2014",
      genre: ["Action", "Crime", "Thriller"],
      rating: "7.4",
      vPoster: Image,
      duration: "1h 41m",
      tags: ["assassin", "revenge", "neo-noir"]
    },
    {
      id: "7",
      title: "Mad Max: Fury Road",
      description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
      releaseDate: "2015",
      genre: ["Action", "Adventure", "Sci-Fi"],
      rating: "8.1",
      vPoster: Image,
      duration: "2h",
      tags: ["post-apocalypse", "car chase", "feminism"]
    },
    {
      id: "8",
      title: "The Matrix",
      description: "When a beautiful stranger leads Neo to a forbidding underworld, he discovers the shocking truth about reality.",
      releaseDate: "1999",
      genre: ["Action", "Sci-Fi"],
      rating: "8.7",
      vPoster: Image,
      duration: "2h 16m",
      tags: ["simulation", "AI", "reality"]
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Check className="w-6 h-6 mr-2 text-green-400" />
        Watched Movies ({watchedMovies.length})
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {watchedMovies.map(movie => (
          <div key={movie.id} className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-all duration-300 group">
            <div className="flex space-x-3">
              <img
                src={movie.vPoster}
                alt={movie.title}
                className="w-16 h-20 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm mb-1 truncate">{movie.title}</h3>
                <p className="text-gray-300 text-xs mb-2">{movie.releaseDate}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 text-xs">{movie.rating}</span>
                  <span className="text-gray-400 text-xs">• {movie.duration}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {movie.genre.slice(0, 2).map(g => (
                    <span key={g} className="bg-blue-600/30 text-blue-300 text-xs px-2 py-1 rounded">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieWatchedList;