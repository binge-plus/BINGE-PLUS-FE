import React, { useState, useEffect } from 'react';
import { X, Shield, BookOpen, AlertTriangle, Scale, Users, Globe } from 'lucide-react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  // Get last shown time from localStorage
  const getLastShownTime = () => {
    const stored = localStorage.getItem('disclaimerLastShown');
    return stored ? parseInt(stored, 10) : null;
  };

  // Set last shown time in localStorage
  const setLastShownTime = (time) => {
    localStorage.setItem('disclaimerLastShown', time.toString());
  };

  useEffect(() => {
    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
    const lastShownTime = getLastShownTime();

    if (!lastShownTime) {
      // First time - set the initial time and show modal immediately
      setLastShownTime(currentTime);
      setIsOpen(true);
      return;
    }

    const timeSinceLastShown = currentTime - lastShownTime;

    if (timeSinceLastShown >= oneHour) {
      setIsOpen(true);
      setLastShownTime(currentTime);
    } else {
      // Set a timeout for the remaining time
      const remainingTime = oneHour - timeSinceLastShown;
      const timer = setTimeout(() => {
        setIsOpen(true);
        setLastShownTime(new Date().getTime());
      }, remainingTime);

      return () => clearTimeout(timer);
    }
  }, []);

  // Timer countdown for next appearance
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const oneHour = 60 * 60 * 1000;
        const lastShownTime = getLastShownTime();
        
        if (lastShownTime) {
          const timeSinceLastShown = currentTime - lastShownTime;
          const remaining = oneHour - timeSinceLastShown;
          
          if (remaining <= 0) {
            setTimeLeft(null);
            clearInterval(interval);
          } else {
            setTimeLeft(Math.ceil(remaining / ( 60 * 1000))); // minutes
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) {
    return timeLeft ? (
      <div className="fixed bottom-4 right-4 z-40 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
        <p className="text-sm">Next disclaimer in: {timeLeft} min</p>
      </div>
    ) : null;
  }

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-md bg-black/20"
      onClick={handleOverlayClick}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Modal container with enhanced styling */}
        <div className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl shadow-2xl max-w-3xl w-full mx-4 transform transition-all duration-300 border border-gray-200/50 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10 shadow-sm"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>

          {/* Header with enhanced design */}
          <div className="p-8 pb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-sm">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Educational Use Disclaimer
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Important information about this platform
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Educational Purpose</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This platform is designed <strong>exclusively for educational purposes</strong> and learning about streaming technologies, web development, and media management systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">No Piracy</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>No piracy or copyright infringement</strong> is intended or supported. All content should be legally obtained and used in accordance with applicable laws.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Scale className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Users are responsible for ensuring their use complies with all applicable copyright laws and regulations in their jurisdiction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">User Responsibility</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Users must respect intellectual property rights and use this platform responsibly. Any misuse is strictly prohibited.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Globe className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Global Standards</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This platform follows international best practices for educational technology and respects global copyright standards.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-l-4 border-blue-400">
                  <p className="text-blue-800 text-sm font-medium">
                    💡 <strong>Remember:</strong> This is a learning environment designed to help you understand streaming technologies and web development concepts.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Important Legal Notice</h4>
                  <p className="text-red-800 text-sm leading-relaxed">
                    By using this platform, you acknowledge that you understand and agree to use it responsibly and within legal boundaries. 
                    The platform owners are not responsible for any misuse of the system or violation of copyright laws by users.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 rounded-b-3xl border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  This notice appears every 15 minutes for your awareness
                </p>
                <p className="text-xs text-gray-400">
                  Version 1.0 • Educational Use Only
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  I Understand & Agree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;