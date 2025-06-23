import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react"
import image from "/download.jpeg"



const heroMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    genre: ["Action", "Crime", "Drama"],
    rating: "9.0",
  },
  {
    id: 2,
    title: "Stranger Things",
    description:
      "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    genre: ["Drama", "Fantasy", "Horror"],
    rating: "8.7",
  },
  {
    id: 3,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: "8.8",
  },
  {
    id: 4,
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    genre: ["Crime", "Drama", "Thriller"],
    rating: "9.5",
  },
  {
    id: 5,
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: "8.6",
  },
  {
    id: 6,
    title: "The Crown",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    genre: ["Biography", "Drama", "History"],
    rating: "8.6",
  },
  {
    id: 7,
    title: "The Mandalorian",
    description:
      "A lone gunfighter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: "8.7",
  },
  {
    id: 8,
    title: "Parasite",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    genre: ["Comedy", "Drama", "Thriller"],
    rating: "8.6",
  }
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroMovies.length)
      }, 2500)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroMovies.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroMovies.length)
  }

  const currentMovie = heroMovies[currentIndex]

  return (
    <div
      className="relative h-[70vh] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentMovie.backgroundImage || image}
          alt={currentMovie.title}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">

            <h1 className="mb-4 text-8xl font-regular text-white leading-tight tracking-tight">{currentMovie.title}</h1>

            <div className="mb-4 flex items-center gap-2">
              {currentMovie.genre.map((genre, index) => (
                <span
                  key={index}
                  className="rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-400 border border-red-600/30"
                >
                  {genre}
                </span>
              ))}
              <span className="ml-2 text-yellow-400 font-semibold">★ {currentMovie.rating}</span>
            </div>
            <p className="mb-8 text-lg text-gray-300 leading-relaxed max-w-2xl">{currentMovie.description}</p>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 font-semibold text-white transition-all hover:from-red-700 hover:to-orange-600 hover:scale-105">
                <Play size={20} fill="white" />
                Watch Now
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-gray-800/50 backdrop-blur-md px-8 py-3 font-semibold text-white border border-gray-600 transition-all hover:bg-gray-700/50">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-8 rounded-full transition-all ${index === currentIndex ? "bg-red-600" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  )
}
