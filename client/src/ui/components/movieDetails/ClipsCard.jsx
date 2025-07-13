import { Play} from "lucide-react"



const ClipsCard = ({ videoUrl, title, duration, onClick }) => {
  return (
    <div className="flex-shrink-0 w-80 cursor-pointer group" onClick={onClick}>
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center">
            <Play size={24} fill="white" className="text-white ml-1" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-sm">{duration}</div>
      </div>

      <div className="space-y-2">
        <h4 className="text-white font-semibold text-lg leading-tight group-hover:text-red-400 transition-colors">
          {title}
        </h4>
      </div>
    </div>
  )
}

export default ClipsCard
