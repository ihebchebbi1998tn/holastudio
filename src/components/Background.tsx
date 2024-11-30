import React, { useMemo } from 'react';

const Background = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3B0764,transparent)]" />
      <div className="absolute w-full h-full">
        {stars.map(({ id, left, top, duration, delay }) => (
          <div
            key={id}
            className="star"
            style={{
              left,
              top,
              animation: `twinkle ${duration}s infinite ${delay}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;