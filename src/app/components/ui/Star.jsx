"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function Star() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 
  style={{
    fontFamily: 'sans-serif',
    backgroundImage: 'url("/moon.jpg"), linear-gradient(to bottom, #FFFFFF, #3B82F6)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  }}
  className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20"
>
  CampusCanvas
</h1>


      <div className="w-[50%] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-5/6 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-4/7" />
        
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={1.4}
          particleDensity={160}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-1 w-full h-full bg-black [mask-image:radial-gradient(400px_300px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
