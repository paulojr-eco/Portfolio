'use client';

import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isProgress, setisProgress] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
    const target = e.target;
    setisProgress(
      window.getComputedStyle(target).getPropertyValue('cursor') === 'progress'
    );
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cursorSize = 20;

  return (
    <div
      className={`${isProgress ? 'progress' : 'cursor'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`
      }}
    ></div>
  );
};

export default CustomCursor;
