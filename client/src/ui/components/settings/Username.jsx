import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Save} from 'lucide-react';
import Profile from '../../Data/profileData';

const name = Profile.username;



const UsernameBlock = () => {
  const [username, setUsername] = useState(name);

  const handleSaveUsername = () => {
    Profile.username = username; // Update the global name variable
    console.log('Username updated:', username);
    // Add your save logic here
    
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
          <User className="text-blue-400" size={24} />
        </div>
        <h2 className="text-xl font-semibold text-white">Username</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Current Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter new username"
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSaveUsername}
          className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
        >
          <Save size={18} className="mr-2" />
          Save Username
        </motion.button>
      </div>
    </motion.div>
  );
};

export default UsernameBlock;