import React from 'react';
import Background from './components/Background';
import Logo from './components/Logo';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="space-y-20 animate-fade-in">
          <Logo />
          <ComingSoon />
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-300/70 text-sm">
            © 2024 Holas Studio. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;