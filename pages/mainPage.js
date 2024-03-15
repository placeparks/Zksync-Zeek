"use client"
import { useScroll, useTransform } from "framer-motion"
import React from "react"
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect"
import { Web3Button } from "@thirdweb-dev/react"
import NFTCard from "../components/NFTCard"

export function MainPage() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const editionDropContract = "0xEE48b8AF0fF6C05Ffdacf3a2225848c5e3FcbbFB"

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2])
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2])
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])

    return (
      <>
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth
        ]}
          />
 
            </div>
            <div className=" bg-black w-full dark:border dark:border-white/[0.1] w-full h-[500px] -mt-40 md:-mt-40  flex items-center justify-center bg-red-transparent">

            <Web3Button
className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-100 md:text-base text-black text-xs  w-fit mx-auto "
                 contractAddress={editionDropContract}
                 action={(contract) => contract.erc1155.claim(0, 1)}
                 onSuccess={(result) => alert("Congrats on Minting Your First ZEEK!")}
               >
                 Claim Your ZEEK
                </Web3Button>
            </div>
        
      </>
  )
}
