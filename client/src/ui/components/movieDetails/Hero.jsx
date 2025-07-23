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
      }, 1000);
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
      className="relative h-[75vh] w-full overflow-hidden rounded-lg"
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

      
    </div>
  );
};

export default Hero;
