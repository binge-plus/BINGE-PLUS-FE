import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Sun, Moon, Monitor } from 'lucide-react';

const ThemeBlock = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const themes = [
    { id: 'light', name: 'Light', icon: <Sun size={20} /> },
    { id: 'dark', name: 'Dark', icon: <Moon size={20} /> },
    { id: 'system', name: 'System', icon: <Monitor size={20} /> }
  ];

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
    console.log('Theme changed to:', themeId);
    // Add your theme change logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-purple-600/20 rounded-lg mr-3">
          <Palette className="text-purple-400" size={24} />
        </div>
        <h2 className="text-xl font-semibold text-white">Theme</h2>
      </div>
      
      <div className="space-y-3">
        {themes.map((theme) => (
          <motion.button
            key={theme.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleThemeChange(theme.id)}
            className={`w-full flex items-center p-3 rounded-lg transition-all ${
              currentTheme === theme.id
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {theme.icon}
            <span className="ml-3 font-medium">{theme.name}</span>
            {currentTheme === theme.id && (
              <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeBlock;