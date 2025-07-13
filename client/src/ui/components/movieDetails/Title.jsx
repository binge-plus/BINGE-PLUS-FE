import { Clock, Calendar, Star } from "lucide-react"

const MovieDetails = ({ poster, title, releaseDate, duration, rating, description, genre }) => {

  // Helper function to format release date
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString; // Return original if parsing fails
    }
  };

  const movieData = {
    poster: poster,
    title: title || 'Unknown Title',
    releaseDate: formatDate(releaseDate),
    duration: duration || 0,
    rating: rating || 0,
    description: description || 'No description available.',
    genres: genre || [],
  }

  return (
    <div className="min-h-100 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Vertical Poster */}
          <div className="flex-shrink-0">
            <img
              src={movieData.poster || "/placeholder.svg"}
              alt={`${movieData.title} poster`}
              className="w-64 h-96 object-cover rounded-lg shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* All Movie Info */}
          <div className="flex-1 space-y-8">
            {/* Title and Meta */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">{movieData.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-red-400" />
                  <span className="text-lg">{movieData.releaseDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-red-400" />
                  <span className="text-lg">{movieData.duration}</span>
                  <span className="text-gray-500">min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-400" fill="currentColor" />
                  <span className="text-lg font-semibold text-yellow-400">{movieData.rating}</span>
                  <span className="text-lg font-semibold text-yellow-400">/ 10</span>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{movieData.description}</p>
              </div>
              
              {/* Genres Section */}
              {movieData.genres.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Genres</h3>
                  <div className="flex flex-wrap gap-2">
                    {movieData.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-red-600/20 px-4 py-2 text-sm text-red-400 border border-red-600/30 hover:bg-red-600/30 transition-colors cursor-default"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;