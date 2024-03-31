"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="font-mono text-4xl font-semibold text-white dark:text-white">
              Unveil the <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none font-mono">
                Fibonacci Bloom
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}
