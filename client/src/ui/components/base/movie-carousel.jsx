import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MovieCard from "./movie-card"





export default function MovieCarousel({ title, movies }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const cardWidth = 200
  const gap = 16
  const visibleCards = 6
  const maxScroll = Math.max(0, (movies.length - visibleCards) * (cardWidth + gap))

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(0, prev - (cardWidth + gap) * 3))
  }

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(maxScroll, prev + (cardWidth + gap) * 3))
  }

  return (
    <div className="relative mb-8">
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>

      <div className="relative group">
        {/* Left Arrow */}
        {scrollPosition > 0 && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/70 p-2 text-white opacity-0 transition-all group-hover:opacity-100 hover:bg-black/90"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Right Arrow */}
        {scrollPosition < maxScroll && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/70 p-2 text-white opacity-0 transition-all group-hover:opacity-100 hover:bg-black/90"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Movies Container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-16 transition-transform duration-300 ease-out p-4"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              width: `${movies.length * (cardWidth + gap)}px`,
            }}
          >
            {movies.map((movie) => (
              <div key={movie.id} style={{ width: cardWidth, flexShrink: 0 }}>
                <MovieCard {...movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
