import React, { useState, useEffect } from 'react';
import { X, Shield, BookOpen, AlertTriangle, Scale, Users, Globe, Server, Info, Code } from 'lucide-react';

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
    const oneHour = 2 * 60 * 1000; // 1 hour in milliseconds
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
        const oneHour = 2 * 60 * 1000;
        const lastShownTime = getLastShownTime();
        
        if (lastShownTime) {
          const timeSinceLastShown = currentTime - lastShownTime;
          const remaining = oneHour - timeSinceLastShown;
          
          if (remaining <= 0) {
            setTimeLeft(null);
            clearInterval(interval);
          } else {
            setTimeLeft(Math.ceil(remaining / (60 * 60 * 1000))); // hours
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
      className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-md bg-black/25"
      onClick={handleOverlayClick}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Modal container with enhanced styling */}
        <div className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl shadow-2xl max-w-4xl w-full mx-4 transform transition-all duration-300 border border-gray-200/50 backdrop-blur-sm">
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
                  Educational Use & Technical Showcase Disclaimer
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Technical demonstration platform showcasing development expertise
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
                    <h4 className="font-semibold text-gray-900 mb-2">Educational & Technical Showcase</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This platform serves <strong>dual purposes:</strong> educational learning about streaming technologies and as a comprehensive showcase of our expertise in <strong>full-stack web development, cloud integration, DevOps tools, CI/CD pipelines</strong>, and modern development practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Source</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>All content available here is not owned by us</strong> and has already been posted publicly on the internet. We serve as an aggregator for educational demonstration purposes only.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">No Piracy Intent</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>No piracy or copyright infringement</strong> is intended or supported. We do not host, store, or distribute copyrighted content. All links point to publicly available sources.
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
                      Users must respect intellectual property rights and use this platform responsibly. Any misuse is strictly prohibited and solely the user's responsibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Server className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Demonstration</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This project demonstrates our proficiency in <strong>modern web technologies, cloud architecture, containerization, automated deployment pipelines, monitoring systems</strong>, and scalable application development. It serves as a portfolio piece showcasing technical capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Info className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Removal</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      If you are a content owner and believe your rights are being infringed, please contact us immediately for content removal.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-l-4 border-blue-400">
                  <p className="text-blue-800 text-sm font-medium">
                    🚀 <strong>Technical Portfolio:</strong> This platform showcases expertise in React, Node.js, cloud services (AWS/Azure/GCP), Docker, Kubernetes, CI/CD pipelines, and modern DevOps practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Notice Sections */}
            <div className="mt-8 space-y-4">
              {/* Technical Showcase Notice */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-2">Technical Skills Demonstration</h4>
                    <p className="text-emerald-800 text-sm leading-relaxed">
                      <strong>Portfolio Project:</strong> This platform serves as a comprehensive demonstration of our technical expertise including full-stack web development, cloud architecture, containerization with Docker, Kubernetes orchestration, CI/CD pipeline implementation, automated testing, monitoring & logging, database management, API development, and modern DevOps practices. It showcases real-world application of cutting-edge technologies and industry best practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Ownership Notice */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-2">Content Ownership & Source</h4>
                    <p className="text-teal-800 text-sm leading-relaxed">
                      <strong>Important:</strong> We do not own any of the content available through this platform. All content is sourced from publicly available internet sources and is used solely for educational and demonstration purposes. We respect all intellectual property rights and encourage users to support original content creators.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Important Legal Notice</h4>
                    <p className="text-red-800 text-sm leading-relaxed">
                      By using this platform, you acknowledge that you understand and agree to use it responsibly and within legal boundaries. 
                      The platform owners are not responsible for any misuse of the system, violation of copyright laws by users, or any third-party content accessed through this platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 rounded-b-3xl border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  This notice appears periodically for your awareness and legal protection
                </p>
                <p className="text-xs text-gray-400">
                  Version 2.0 • Educational Use & Technical Portfolio • Full-Stack Development Showcase
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