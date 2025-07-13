import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock CastCard component since it's not provided
const CastCard = ({ name, character, image, isActor }) => (
  <div className="flex-shrink-0 w-32 text-center">
    <img
      src={image || "/placeholder.svg?height=100&width=100"}
      alt={name}
      className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
    />
    <p className="text-white text-sm font-medium truncate">{name}</p>
    <p className="text-gray-400 text-xs truncate">{character}</p>
  </div>
);

const Cast = ({ cast = [], crew = [], loading = false, error = null }) => {
  const [activeTab, setActiveTab] = useState('cast');
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Cast & Crew</h2>
        <div className="text-gray-400">Loading cast and crew...</div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Cast & Crew</h2>
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  // Get current data based on active tab
  const currentData = activeTab === 'cast' ? cast : crew;
  const hasData = cast.length > 0 || crew.length > 0;

  // Show empty state if no data
  if (!hasData) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Cast & Crew</h2>
        <div className="text-gray-400">No cast or crew information available.</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Cast & Crew</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-gray-700">
        <button
          onClick={() => setActiveTab('cast')}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            activeTab === 'cast'
              ? 'text-red-400 border-b-2 border-red-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Cast ({cast.length})
        </button>
        <button
          onClick={() => setActiveTab('crew')}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            activeTab === 'crew'
              ? 'text-red-400 border-b-2 border-red-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Crew ({crew.length})
        </button>
      </div>

      {/* Content */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {currentData.length > 0 ? (
          currentData.map((person, index) => (
            <CastCard
              key={person.id || index}
              name={person.name}
              character={person.characterName}
              jobTitle={person.jobTitle}
              image={person.profilePhoto}
              type={activeTab}
            />
          ))
        ) : (
          <div className="text-gray-400 py-4">
            No {activeTab} information available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cast;