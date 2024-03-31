import React from "react";

const About1 = () => {
  return (
    <div className="background-radial-gradient px-6 py-12 text-center md:px-12 lg:text-left h-[100vh]">
      <style>
              {`
        .background-radial-gradient {
        background: rgb(34,193,195);
        background: radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
          }
        }
        `}
      </style>
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h4 className="font-mono mt-0 mb-16 text-2xl font-bold tracking-tight md:text-3xl xl:text-3xl text-[hsl(218,81%,95%)]">
            Welcome to the realm of Fibonacci Bloom, where art, mathematics, and the digital frontier converge. Here, each NFT is more than a masterpiece — it's an entry into a clandestine tapestry of experiences. Own a piece of Cipher Sun, and align with the visionaries unlocking the next dimension of engagement. Your journey through the spirals of innovation begins now- <br /><span className="text-[hsl(200,81%,75%)]">embrace the Bloom</span>
            </h4>
        
          </div>
          <div className="mb-12 lg:mb-0">
            <img src="/flowers.jpg"
              className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
