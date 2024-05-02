'use client';

import { useEffect, useState } from 'react';

const MovingLights = () => {
  const [endAnimation, setEndAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEndAnimation(true);
    }, 8000);
  });

  return (
    <div
      className={`motion-area ease m-[20px] h-[91vh] rounded-xl lg:m-[32px] ${endAnimation && 'animate-pulse'}`}
    >
      <div className="absolute left-[-90vw] md:left-px">
        <div className="bg-shape1 light-one bg-blur xl:left-[10vw] top-[55vh] md:top-[30vh] absolute rounded-full"></div>
        <div className="bg-shape2 light-two bg-blur xl:left-[10vw] top-[55vh] md:top-[30vh] absolute rounded-full"></div>
      </div>
    </div>
  );
};

export default MovingLights;

{
  /* <div className="motion-area ease m-[20px] h-[91vh] duration-[4000ms] rounded-xl lg:m-[32px]">
      <div className="absolute left-[10vw] ">
        <span className="bg-shape1 light-one top-[55vh] md:top-[30vh] bg-blur absolute rounded-full"></span>
      </div>
      <div className="absolute left-[10vw] ">
        <span className="bg-shape2 light-two top-[55vh] md:top-[30vh] bg-blur absolute rounded-full"></span>
      </div>
    </div> */
}
