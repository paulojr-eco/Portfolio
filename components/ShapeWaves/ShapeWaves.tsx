import React from 'react';

interface ShapeWavesProps {}

const ShapeWaves: React.FC<ShapeWavesProps> = () => {
  return (
    <>
      <div className="absolute top-[450px] w-full h-[100px] bg-wave bg-[length:1200px_100px] animate-wave z-[1000] opacity-90"></div>
      <div className="absolute top-[550px] w-full h-[100px] bg-wave bg-[length:1200px_100px] animate-wave z-[1000] opacity-90 rotate-180"></div>
    </>
  );
};

export default ShapeWaves;
