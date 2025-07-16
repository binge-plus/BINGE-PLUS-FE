import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react"
import api from '../../lib/axios'

const transformMovieData = (movie) => ({
  id: movie.id,
  title: movie.title,
  backgroundImage: movie.hPoster,
  genre: movie.genres || [],
  rating: movie.rating,
  description: movie.description,
  releaseDate: movie.releaseDate,
  movieUrl: movie.movieLink,
});

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [movies, setMovies] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("/movies");
        // Sort by createdAt descending and take the latest 5
        const sorted = res.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        setMovies(sorted);
      } catch (error) {
        console.log(error);
        console.error("Failed to load movies");
      }
    };
    fetchMovies();
  }, []);

  const heroMovies = movies.map(transformMovieData);

  useEffect(() => {
    if (!isHovered && heroMovies.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroMovies.length)
      }, 7500)
      return () => clearInterval(interval)
    }
  }, [isHovered, heroMovies.length])

  const goToPrevious = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    console.log("Previous button clicked, current index:", currentIndex);
    
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? heroMovies.length - 1 : prevIndex - 1;
      console.log("New index:", newIndex);
      return newIndex;
    });
  }

  const goToNext = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % heroMovies.length;
      return newIndex;
    });
  }

  const handleWatchNow = () => {
    if (currentMovie.movieUrl) {
      window.open(currentMovie.movieUrl, '_blank', 'noopener,noreferrer');
    }
  }

  const handleMoreInfo = () => {
    if (currentMovie.id) {
      navigate(`/movies/${currentMovie.id}`);
    }
  }

  const handleDotClick = (index) => {
    console.log("Dot clicked, setting index to:", index);
    setCurrentIndex(index);
  }

  // Handle case when no movies are loaded yet
  if (heroMovies.length === 0) {
    return (
      <div className="relative h-[70vh] w-full overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading movies...</div>
      </div>
    )
  }

  const currentMovie = heroMovies[currentIndex%5]

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentMovie.backgroundImage || "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=600&fit=crop"}
          alt={currentMovie.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
          style={{
            background:
              'linear-gradient(to right, black 0%, black 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 75%, transparent 100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h1 className="mb-4 text-6xl md:text-8xl font-regular text-white leading-tight tracking-tight">
              {currentMovie.title}
            </h1>

            <div className="mb-4 flex items-center gap-2 flex-wrap">
              {Array.isArray(currentMovie.genre) &&
                currentMovie.genre.map((genre, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-400 border border-red-600/30"
                  >
                    {genre}
                  </span>
                ))}
              <span className="ml-2 text-yellow-400 font-semibold">
                ★ {currentMovie.rating}
              </span>
            </div>
            <p className="mb-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
              {currentMovie.description}
            </p>

            <div className="flex gap-4">
              <button 
                onClick={handleWatchNow}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 font-semibold text-white transition-all hover:from-red-700 hover:to-orange-600 hover:scale-105"
              >
                <Play size={20} fill="white" />
                Watch Now
              </button>

              <button 
                onClick={handleMoreInfo}
                className="flex items-center gap-2 rounded-lg bg-gray-800/50 backdrop-blur-md px-8 py-3 font-semibold text-white border border-gray-600 transition-all hover:bg-gray-700/50"
              >
                <Info size={20} />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70 z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous movie"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70 z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next movie"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-8 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentIndex ? "bg-red-600" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}