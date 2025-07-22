
const CastCard = ({ name, character, jobTitle, image, type }) => (
  <div className="flex-shrink-0 w-32 text-center group cursor-pointer">
    <div className="relative mb-3">
      <img
        src={image || "/download.jpeg"}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-gray-600 group-hover:border-red-400 transition-colors"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="space-y-1">
      <h4 className="text-white font-semibold text-sm leading-tight">{name}</h4>
      {type === 'cast' && character && (
        <p className="text-gray-400 text-xs">as {character}</p>
      )}
      {type === 'crew' && jobTitle && (
        <p className="text-red-400 text-xs font-medium">{jobTitle}</p>
      )}
    </div>
  </div>
);


export default CastCard;