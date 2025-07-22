import { User, Calendar, Mail, Check } from 'lucide-react';
import Profile from '../../Data/profileData.js';

const ProfileCard = () => {
  const userProfile = Profile;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <User className="w-6 h-6 mr-2 text-blue-400" />
        Profile Information
      </h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="relative">
          <img
            src={userProfile.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-400/30"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800 flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-2">{userProfile.name}</h3>
          <p className="text-gray-300 mb-1">@{userProfile.username}</p>
          <div className="flex items-center justify-center md:justify-start text-gray-400 mb-2">
            <Mail className="w-4 h-4 mr-2" />
            {userProfile.email}
          </div>
          <div className="flex items-center justify-center md:justify-start text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            Member since {userProfile.creationDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;