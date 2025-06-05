'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            © 2024 Viber Bot Management Platform. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              Version 1.0.0
            </span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-admin-success rounded-full"></div>
              <span className="text-sm text-gray-500">System Healthy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
