import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 text-5xl font-bold text-white">
      <Sparkles className="w-12 h-12" />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        HOLAS STUDIO
      </span>
    </div>
  );
};

export default Logo;