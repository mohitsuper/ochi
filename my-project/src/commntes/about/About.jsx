import React, { useState } from 'react'
import Line from '../Line/Line'
import { TfiArrowTopRight } from "react-icons/tfi";

export default function About() {
  let Aboulinks = ["instagram","bahance","facebook","linkedin"]

  return (
    <div data-scroll data-scroll-speed="-.3" className=' about bg-[#CDEA68] rounded-t-[20px]   min-h-[100vh]  py-[5vw]'>
        <div className="about-container px-[50px] pb-[5vw]">
            <h1 className=''>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span>raise funds</span><span>, sell prod­ucts, ex­plain com­plex ideas,</span> and <span>hire great peo­ple.</span></h1>
        </div>

        <Line/>

        <div className="about-text-2 flex justify-between px-[50px] py-5 mb-[5vw]">
            <p>What you can expect:</p>
            <div className="about-continer-text w-[30%] text-xl">
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <br /><br />
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className="about-links ">
            <p>S:</p>
            <ul className="flex flex-col">

            {
                Aboulinks.map((v,i)=>{
                    return(
                      <a href='#' key={i}>{v}</a>
                    )
                })
            }
            </ul>
            </div>
        </div>

        <Line/>

      <div className="about-data flex px-[50px] py-5">
        <div className="a-c-d-1 w-1/2">
          <h1 className="text-[4vw]  text-[#222]">Our approach:</h1>
           <Button/>
         </div>
         <div className="a-c-d-img w-1/2 h-[50vh] ">
            <img src="/asstes/images/about.jpg" className='w-full h-full object-cover'/>
          </div>
        </div>
        
    </div>
  )
}


function Button() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // alert("e")
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsFocused(true);
  };

  const handleMouseClick = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`btu ${isFocused ? 'btu--focused' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
    >
     <a href="#">READ MORE</a>
    <div className="small-gola">
      <TfiArrowTopRight className='i'/>
    </div>
    </div>
  );
}
