import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import NFTCard from "../NFTCard";

export const ContainerScroll = ({ titleComponent }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => isMobile ? [0.7, 0.9] : [1.05, 1];
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const address = useAddress();
  const editionDropContract = "0xEE48b8AF0fF6C05Ffdacf3a2225848c5e3FcbbFB";
  const { contract } = useContract(editionDropContract, "edition-drop");
  const { data: nfts, isLoading } = useOwnedNFTs(contract, address);

  return (
    <div className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20" ref={containerRef}>
      <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} isLoading={isLoading} nfts={nfts} />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => (
  <motion.div style={{ translateY: translate }} className="div max-w-5xl mx-auto text-center">
    {titleComponent}
  </motion.div>
);

export const Card = ({ rotate, scale, translate, isLoading, nfts }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003"
    }}
    className="max-w-5xl -mt-1 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl flex justify-center items-center"
  >
    <div className="bg-gray-100 h-full w-full rounded-2xl flex flex-col items-center justify-center p-4">
      {isLoading ? (
        <div className="text-center text-gray-500">Loading your NFTs...</div>
      ) : nfts && nfts.length > 0 ? (
        nfts.map((nft, idx) => (
          <NFTCard key={idx} nft={nft} style={{ translateY: translate }} />
        ))
      ) : (
        <div className="text-center text-black">
          <h1 className="text-xl font-bold mb-2">You don't have any NFTs yet!</h1>
          <p>Mint your first NFT now and start your collection.</p>
        </div>
      )}
    </div>
  </motion.div>
);
