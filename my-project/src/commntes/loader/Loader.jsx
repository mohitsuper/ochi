import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Loader() {
    let HeroData = ["we create","eye-opening","presentaions"]
    let [animeData,setAnimedata] = useState(0);
    useEffect(() => {
        let intervalId = setInterval(() => {
          setAnimedata((prevValue) => {
            if (prevValue < 100) {
              return prevValue + 1;
            } else {
              clearInterval(intervalId);
              return prevValue;
            }
          });
        }, 10); // update every 10ms
        return () => {
          clearInterval(intervalId);
        };
      }, [setAnimedata]);
    

      useGSAP(()=>{
        gsap.to(".loader",{
            opacity:0,
            delay:3,
            display:"none",
            // backgroundColor:"red",
          })
      })
        
  return (
    <div className='loader w-full h-full  z-30 top-0 left-0 bg-[#f1f1f1]' >
        <Navbar/>
        <div className="hero-text mt-[5vw] mb-[7vw] mx-[50px]">
           {
            HeroData.map((v,i)=>{
              return(
              
                  <div className={`text2 flex`} key={i}>{v}</div>
              )
            })
           }
        </div>
        <div className="animtion px-[50px] flex justify-between">
            <div className="text">Loading...</div>
            <div className="animtion-text text-[4vw]  text-[#333]">
              {animeData}%</div>
        </div>
    </div>
  )
}
