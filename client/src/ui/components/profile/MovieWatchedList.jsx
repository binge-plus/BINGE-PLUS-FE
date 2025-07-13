import {Star,Check } from 'lucide-react';
import Image from '/download.jpeg'
import Movie from '../../Data/moviesData';

const WatchedID = [3,5,8,10]

const transformMovieData = (movie) => ({
    id: parseInt(movie.id),
    title: movie.title,
    poster: movie.vPoster, // Using vertical poster
    genre: movie.genre,
    rating: movie.rating,
    description: movie.description,
    year: movie.releaseDate,
    // Additional fields from the new data structure
    cast: movie.cast,
    crew: movie.crew,
    trailerLink: movie.trailerLink,
    movieLink: movie.movieLink,
    tags: movie.tags,
    duration: movie.duration,
});

const watchedMovies = Movie
    .filter((movie) => WatchedID.includes(parseInt(movie.id)))
    .map(transformMovieData);

const MovieWatchedList = () => {

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
                src={Image}
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