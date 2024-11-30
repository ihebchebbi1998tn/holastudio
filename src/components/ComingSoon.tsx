import React from 'react';
import { Rocket } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center mb-6">
        <Rocket className="w-16 h-16 text-purple-400 animate-pulse" />
      </div>
      <h2 className="text-7xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-text">
        Coming Soon
      </h2>
      <p className="text-purple-200 text-xl max-w-2xl mx-auto leading-relaxed">
        We're crafting something extraordinary. A new dimension of digital experiences is about to unfold.
      </p>
    </div>
  );
};

export default ComingSoon;