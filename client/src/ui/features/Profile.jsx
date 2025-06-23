import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/profile/ProfileCard';
import Preferences from '../components/profile/Preference';
import MovieWatchedList from '../components/profile/MovieWatchedList';
import MovieWatchingList from '../components/profile/MovieWatchinList';




const Profile = () => {
  const [isNavHovered, setIsNavHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex">
      {/* Navigation */}
      <div className="relative z-50">
        <Navbar onHoverChange={setIsNavHovered} />
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isNavHovered 
            ? 'ml-64 blur-sm brightness-50' 
            : 'ml-20'
        }`}
      >
        {/* Overlay when nav is hovered */}
        {isNavHovered && (
          <div className="fixed inset-0 bg-black/20 z-10 pointer-events-none" 
            style={{ left: '256px' }} />
        )}
        
        <main className="relative z-0 p-6 space-y-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              My Profile
            </h1>
            
            {/* Profile Card */}
            <div className="mb-8">
              <ProfileCard />
            </div>
            
            {/* Movies Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <MovieWatchingList />
              <MovieWatchedList />
            </div>
            
            {/* Preferences */}
            <Preferences />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;