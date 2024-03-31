import React, {useState, useEffect} from "react"
import { Web3Button } from "@thirdweb-dev/react"
import LottieLoader from 'react-lottie-loader'
import Loader from '../assets/Loader.json'
import gsap from "gsap";

const mint = () => {
    const [quantityToMint, setQuantityToMint] = useState(1);
    const [isMinting, setIsMinting] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          defaults: {
            ease: "power3.inOut",
          },
        });
    
        // Calculate the Y movement based on screen width
        const translateY = window.innerWidth < 768 ? 100 : 250;
        const staggerTime = window.innerWidth < 768 ? 0.2 : 0.5;
    
        tl.to(".stagger-box", {
          y: translateY,
          rotation: 360,
          borderRadius: "100%",
          stagger: staggerTime,
        });
      }, []);
    
    const editionDropContract = "0x1d0E7d5bE3Fea1Ddff7ddb7baECC55Cc05450B78"

    const handleQuantityChange = (event) => {
        setQuantityToMint(event.target.value);
      };
    
      const handleMint = async (contract) => {
        setIsMinting(true); // Start loading animation
        try {
          const quantity = parseInt(quantityToMint, 10);
          if (Number.isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity");
            setIsMinting(false); // Stop loading animation
            return;
          }
          await contract.erc1155.claim(0, quantity);
          alert(`Congrats on Minting Your ZEEK(s)!`);
        } catch (error) {
          console.error("Error minting:", error);
          alert("There was an error minting your ZEEK(s).");
        }
        setIsMinting(false); // Stop loading animation
      };

  return (
      <>
<style>
  {`
    body {
      margin: 0;
      padding: 0;
      background: radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
      background-attachment: fixed;
      background-size: cover;
    }
    .nft-images-container {
      display: flex;
      justify-content: center; /* Align items horizontally in the center */
      align-items: center; /* Align items vertically in the center */
      padding: 20px;
      gap: 30px;
      min-height: 100vh; /* Make container at least as tall as the viewport */
      margin-top: -320px;
  }
  
      .stagger-box {
        min-width: 200px;
        height: 200px;
        border-radius: 10%; 
      }
      
  `}
</style>


<div className="flex flex-col items-center justify-center h-screen">
  <h5 className="text-center text-white relative z-20 px-4 md:px-8 lg:w-[60rem] mb-2 text-sm md:text-base lg:text-lg font-mono">
    Step into the Fibonacci Bloom, a collection where each NFT is a masterpiece of art and mathematics entwined. By securing a piece, you don't just acquire art—you unlock the door to a privileged tapestry of experiences and become eligible for the exclusive Moody NFT raffle. With Cipher Sun, you are not merely a collector; you are a pivotal piece of an evolving saga. Here, the Fibonacci sequence is more than an elegant pattern; it's your passageway to a horizon brimming with possibilities.
  </h5>
  <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center">
  <input
    type="number"
    min="1"
    value={quantityToMint}
    onChange={handleQuantityChange}
    className="bg-gray-700 text-white rounded-1-md p-2 z-50 border border-white mb-4 w-[140px]"
    placeholder="Enter amount"
  />

  <Web3Button
    className="font-bold bg-white rounded-r-md md:px-4 md:py-2 px-2 py-1 md:text-base text-black text-xs w-full" // Changed w-fit to w-full to make the button full width
    contractAddress={editionDropContract}
            action={handleMint}
            modalTitle="Fibonacci Bloom"
            modalTitleIconUrl=""
            welcomeScreen={() => (
              <div style={{ height: "100%", width: "100%" }}>
                <MediaRenderer src="/flowers.jpg" height="100%" width="auto" />
              </div>
            )}
            
  >
    Mint Your Bloom
  </Web3Button>
  {isMinting && (
    <div>
      <LottieLoader animationData={Loader} height={50} width={50} />
    </div>
  )}
</div>

</div>

      <div className="nft-images-container">
      <img src="/nft2.webp" alt="NFT Image 2" className="stagger-box" />
  <img src="/moody1.jpeg" alt="NFT Image 1" className="stagger-box" />
  <img src="/moody2.avif" alt="NFT Image 2" className="stagger-box" />
  <img src="/moody3.avif" alt="NFT Image 1" className="stagger-box" />
  <img src="/flower.webp" alt="NFT Image 1" className="stagger-box" />
</div>


      </>
  )
}

export default mint
