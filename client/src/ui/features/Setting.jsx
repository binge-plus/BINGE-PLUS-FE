import React from 'react';
import { motion } from 'framer-motion';

import UsernameBlock from '../components/settings/Username';
import ThemeBlock from '../components/settings/Theme';
import PasswordBlock from '../components/settings/Password';
import LogoutBlock from '../components/settings/Logout';
import Navbar from '../components/Navbar';

const Setting = () => {
  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
            >
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-gray-400">Manage your account preferences and security</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UsernameBlock />
            <ThemeBlock />
            <PasswordBlock />
            <LogoutBlock />
            </div>
        </div>
        </div>
    </>
  );
};

export default Setting;