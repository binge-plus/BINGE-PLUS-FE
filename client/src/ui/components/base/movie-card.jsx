import { useState } from "react"
import { Play, Plus, Star } from "lucide-react"
import Image from "/download.jpeg"

export default function MovieCard({ title, poster, genre, rating, description, year }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="aspect-[2/3] w-60 group relative cursor-pointer rounded-lg transition-all duration-300 ease-out hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        // className={`relative rounded-lg transition-all  duration-300 w-60 ${
        //   isHovered ? "scale-110 z-20" : "scale-100"
        // }`}
      >
        {/* Poster Image */}
        <div className="w-full h-full px-2">
          <img
            src={Image}
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full rounded-lg"
          />
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent rounded-lg">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>

              <div className="mb-2 flex items-center gap-2">
                <span className="text-yellow-400 flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  {rating}
                </span>
                <span className="text-gray-300 text-sm">{year}</span>
              </div>

              <div className="mb-3 flex flex-wrap gap-1">
                {genre.slice(0, 2).map((g, index) => (
                  <span
                    key={index}
                    className="rounded bg-red-600/20 px-2 py-1 text-xs text-red-400 border border-red-600/30"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <p className="mb-4 text-sm text-gray-300 line-clamp-3">{description}</p>

              <div className="flex gap-2">
                <button className="flex items-center gap-1 rounded bg-gradient-to-r from-red-600 to-orange-500 px-3 py-2 text-sm font-semibold text-white transition-all hover:from-red-700 hover:to-orange-600">
                  <Play size={14} fill="white" />
                  Watch
                </button>
                <button className="flex items-center gap-1 rounded bg-gray-800/80 px-3 py-2 text-sm text-white transition-all hover:bg-gray-700">
                  <Plus size={14} />
                  List
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Title below card (when not hovered) */}
      {!isHovered && (
        <div className="mt-2 px-1">
          <h3 className="text-sm font-medium text-white truncate">{title}</h3>
        </div>
      )}
    </div>
  )
}
