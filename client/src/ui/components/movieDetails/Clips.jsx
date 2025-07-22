import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ClipsCard from "./ClipsCard"
import ClipModal from "./ClipModal"

const Clips = ({ clips }) => {
  const scrollRef = useRef(null)
  const [selectedClip, setSelectedClip] = useState(null)

  const clipsData = clips.map(clip => ({
    id: clip.id,
    title: clip.title,
    duration: clip.duration || "N/A",
    videoUrl: clip.clipUrl || "#",
  }))

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleClipClick = (clip) => {
    setSelectedClip(clip)
  }

  const closeModal = () => {
    setSelectedClip(null)
  }

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Clips & Trailers</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {clipsData.map((clip) => (
            <ClipsCard
              key={clip.id}
              title={clip.title}
              duration={clip.duration}
              videoUrl={clip.videoUrl}
              onClick={() => handleClipClick(clip)}
            />
          ))}
        </div>
      </div>

      {selectedClip && <ClipModal clip={selectedClip} onClose={closeModal} />}
    </>
  )
}

export default Clips
