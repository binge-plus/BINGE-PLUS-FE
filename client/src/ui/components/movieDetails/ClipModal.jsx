import { useEffect } from "react"
import { X } from "lucide-react"


const ClipModal = ({ clip, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors z-20"
        >
          <X size={24} />
        </button>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={clip.videoUrl}
            title={clip.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold mt-4 text-center">{clip.title}</h3>
      </div>
    </div>
  )
}

export default ClipModal
