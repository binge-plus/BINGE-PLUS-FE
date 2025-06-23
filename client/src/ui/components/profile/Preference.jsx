import { Star, Film, Music, Award, Users } from 'lucide-react';

const Preferences = () => {
  const preferences = {
    genre: ["Action", "Comedy", "Drama"],
    actors: ["Timothée Chalamet", "Emma Stone", "Robert Downey Jr.", "Scarlett Johansson"],
    directors: ["Christopher Nolan", "Quentin Tarantino", "Martin Scorsese"],
    Misc: ["Hans Zimmer", "John Williams", "Marvel Cinematic Universe", "DC Extended Universe"]
  };

  const getIcon = (category) => {
    switch(category) {
      case 'genre': return <Film className="w-5 h-5" />;
      case 'actors': return <Users className="w-5 h-5" />;
      case 'directors': return <Award className="w-5 h-5" />;
      case 'Misc': return <Music className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getColor = (category) => {
    switch(category) {
      case 'genre': return 'from-blue-500 to-cyan-500';
      case 'actors': return 'from-green-500 to-emerald-500';
      case 'directors': return 'from-purple-500 to-violet-500';
      case 'Misc': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Star className="w-6 h-6 mr-2 text-purple-400" />
        Preferences & Settings
      </h2>
      
      <div className="space-y-6">
        {Object.entries(preferences).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-white mb-4 capitalize flex items-center">
              {getIcon(category)}
              <span className="ml-2">{category === 'Misc' ? 'Music & Universes' : category}</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-300 hover:scale-105`}
                >
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${getColor(category)} p-3 shadow-lg group-hover:shadow-xl`}>
                    <div className="w-full h-full rounded-full bg-gray-800/80 flex items-center justify-center">
                      {getIcon(category)}
                    </div>
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-2 group-hover:text-white transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preferences;