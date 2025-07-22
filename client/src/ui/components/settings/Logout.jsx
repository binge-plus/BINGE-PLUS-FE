import React from 'react';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

const LogoutBlock = () => {
  const handleLogout = () => {
    console.log('Logging out...');
    // Add your logout logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 lg:col-span-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-red-600/20 rounded-lg mr-3">
            <LogOut className="text-red-400" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Logout</h2>
            <p className="text-gray-400 text-sm">Sign out of your account</p>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all"
        >
          <LogOut size={18} className="mr-2" />
          Logout
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LogoutBlock;