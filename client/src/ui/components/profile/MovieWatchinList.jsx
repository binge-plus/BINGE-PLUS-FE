import { Star, Clock } from 'lucide-react';
import Image from '/download.jpeg';


const MovieWatchingList = () => {
  const watchingMovies = [
    {
      id: "10",
      title: "Die Hard",
      description: "A NYPD officer tries to save his wife and others taken hostage by German terrorists during a Christmas party.",
      releaseDate: "1988",
      genre: ["Action", "Thriller"],
      rating: "8.2",
      vPoster: Image,
      duration: "2h 12m",
      progress: 45,
      tags: ["hostage", "christmas", "terrorists"]
    },
    {
      id: "11",
      title: "3 Idiots",
      description: "Two friends search for their long-lost companion while recalling their college days.",
      releaseDate: "2009",
      genre: ["Comedy", "Drama"],
      rating: "8.4",
      vPoster: Image,
      duration: "2h 50m",
      progress: 20,
      tags: ["education", "inspiration", "friendship"]
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Clock className="w-6 h-6 mr-2 text-orange-400" />
        Currently Watching ({watchingMovies.length})
      </h2>
      
      <div className="space-y-4">
        {watchingMovies.map(movie => (
          <div key={movie.id} className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-all duration-300">
            <div className="flex space-x-4">
              <img
                src={movie.vPoster}
                alt={movie.title}
                className="w-20 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold text-lg">{movie.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm">{movie.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{movie.description}</p>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-gray-400 text-sm">{movie.releaseDate}</span>
                  <span className="text-gray-400 text-sm">• {movie.duration}</span>
                  <div className="flex gap-1">
                    {movie.genre.slice(0, 2).map(g => (
                      <span key={g} className="bg-purple-600/30 text-purple-300 text-xs px-2 py-1 rounded">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Progress</span>
                    <span className="text-orange-400 text-sm font-semibold">{movie.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${movie.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieWatchingList;