import Placeholder from '/download.jpeg';
import { useState, useEffect, useRef } from "react";
import { Play, ExternalLink } from "lucide-react";

const Hero = ({ title, image, trailerUrl, movieUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const hoverTimerRef = useRef(null); // ✅ Use ref instead of state


  useEffect(() => {
    if (isHovered) {
      hoverTimerRef.current = setTimeout(() => {
        setShowTrailer(true);
      }, 2000);
    } else {
      clearTimeout(hoverTimerRef.current);
      setShowTrailer(false);
    }

    return () => {
      clearTimeout(hoverTimerRef.current);
    };
  }, [isHovered]); // ✅ Only depends on isHovered

  return (
    <div
      className="relative h-[70vh] w-full overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      {!showTrailer && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      )}

      {/* Trailer Video */}
      {showTrailer && (
        <div className="absolute inset-0">
          <iframe
            src={trailerUrl+ "?autoplay=1&mute=1"}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Overlay Controls */}
      {!showTrailer && (
        <div className="absolute bottom-8 left-16 items-center justify-center">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowTrailer(true)}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 font-semibold text-white transition-all hover:from-red-700 hover:to-orange-600 hover:scale-105"
            >
              <Play size={20} fill="white" />
              Play Trailer
            </button>
            <button
              onClick={() => window.open(movieUrl, "_blank")}
              className="flex items-center gap-2 rounded-lg bg-gray-800/50 backdrop-blur-md px-8 py-3 font-semibold text-white border border-gray-600 transition-all hover:bg-gray-700/50"
            >
              <ExternalLink size={20} />
              Watch Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
