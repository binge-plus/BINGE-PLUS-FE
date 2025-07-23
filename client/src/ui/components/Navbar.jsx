import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Home, Film, Monitor, Search, User, Settings } from 'lucide-react';

const Navbar = ({ onHoverChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine active item based on current route
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/movies')) return 'movies';
    if (path.startsWith('/series')) return 'series';
    if (path.startsWith('/search')) return 'search';
    if (path.startsWith('/profile')) return 'profile';
    if (path.startsWith('/settings')) return 'settings';
    return 'home';
  };

  const activeItem = getActiveItem();

  const topNavItems = [
    { id: 'home', label: 'Home', icon: <Home size={24} />, path: '/' },
    { id: 'movies', label: 'Movies', icon: <Film size={24} />, path: '/movies' },
    { id: 'series', label: 'Series', icon: <Monitor size={24} />, path: '/series' },
    { id: 'search', label: 'Search', icon: <Search size={24} />, path: '/search' },
  ];

  const bottomNavItems = [
    { id: 'profile', label: 'Profile', icon: <User size={24} />, path: '/profile' },
    { id: 'settings', label: 'Settings', icon: <Settings size={24} />, path: '/settings' },
  ];

  const handleItemClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-screen w-20 px-2 hover:w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-black border-r 
          border-gray-700/50 backdrop-blur-md z-50 group transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : window.innerWidth < 768 ? '-translate-x-full md:translate-x-0' : 'translate-x-0'
        }`}
        onMouseEnter={() => onHoverChange && onHoverChange(true)}
        onMouseLeave={() => onHoverChange && onHoverChange(false)}
        style={{
          transform: isOpen ? 'translateX(0)' : (typeof window !== 'undefined' && window.innerWidth < 768 ? 'translateX(-280px)' : 'translateX(0)')
        }}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center">
              <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center w-12 h-12">
                  <img src="/logogif.gif" alt="B+" />
                </span>
              </div>
              <span className="ml-4 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Binge+
              </span>
            </Link>
          </div>

          {/* Top Navigation Items */}
          <div className="flex-1 px-2">
            <div className="space-y-2">
              {topNavItems.map((item) => (
                <NavItemComponent
                  key={item.id}
                  item={item}
                  isActive={activeItem === item.id}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </div>

          {/* Bottom Navigation Items */}
          <div className="px-2 pb-6">
            <div className="space-y-2">
              {bottomNavItems.map((item) => (
                <NavItemComponent
                  key={item.id}
                  item={item}
                  isActive={activeItem === item.id}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItemComponent = ({ item, isActive, onClick }) => {
  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group relative transform hover:scale-102 active:scale-98 ${
        isActive
          ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
      }`}
    >
      <div className="flex-shrink-0">
        {item.icon}
      </div>
      <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {item.label}
      </span>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute right-0 w-1 h-8 bg-white rounded-l-full transition-all duration-300 ease-spring" />
      )}
    </Link>
  );
};

export default Navbar;