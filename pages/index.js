"use client";
import React, {useEffect} from "react";
import { SparklesCore } from "../components/ui/sparkles";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/mint");
  };

  useGSAP(() => {
    gsap.to('#btn', { opacity: 1, delay: 2 })
  }, [])

  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="text-center">
<h5 class="text-center text-white relative z-20 px-4 md:px-8 lg:w-[60rem] mx-auto mb-2 text-sm md:text-base lg:text-lg font-mono">
  Embark on a journey with the Fibonacci Bloom for its artistry and innovation. Each Cipher Sun NFT is a digital odyssey meant for enjoyment and creative exploration. Please note that these tokens are crafted for the appreciation of art and community engagement, not for investment purposes. All rights to the Fibonacci Bloom collection are held by mirac.eth, your guide through this venture of digital artistry. Embrace the sequence, enjoy the experience, and stay curious.
        </h5>
        
        <button id="btn"   onClick={handleClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 opacity-0 mt-4">
        <span className="relative font-mono px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Join the Bloom!
</span>
        </button>
        </div>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute top-0 left-0 w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]">
    </div>
      </div>
      </div>
      
  );
}
