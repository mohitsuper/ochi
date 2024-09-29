import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { TfiArrowTopRight } from "react-icons/tfi";
export default function Hero() {
  let HeroData = ["we create","eye-opening","presentaions"]
  let Herobottom = ["For public and private companies","From the first pitch to IPO","start the project"]
   useGSAP(()=>{
    gsap.to(".hero-img",{
      width:"9vw",
      delay:3.8,
      duration:0.5,
    })

    gsap.to(".text-down",{
      y:100,
      duration:1,
      // delay:2,
      repeat:-1,
    })
   })
  return (
    <div className='h-full w-full' data-scroll data-scroll-speed="-.3">
        <div className="hero-text mt-[10vw] mb-[14vw] mx-4  xl:mt-[5vw] xl:mb-[7vw] h-full xl:mx-[50px]">
           {
            HeroData.map((v,i)=>{
              return(
                <>
                  
                  <div className={`text-mo  text-mo-${i} text text-${i}  flex`}>{(i ==1)?
                    <div className="hero-img">
                      <img src="/asstes/images/hero1.jpg" alt="" />
                    </div>:""} {v}</div>
                </>
              )
            })
           }
        </div>

        <div className="line h-[1px] bg-[#00000039] w-full mx-0"></div>

        <div className="hero-bottom-text flex  px-[50px] py-5">
           {
            Herobottom.map((v,i)=>{
              return(
                <>
                {
                  (i==2)?
                  <div className="btu-container ml-[20vw] ">
                     <button>{v}</button>
                     <div className="gola">
                     <TfiArrowTopRight />
                     </div>
                  </div>
                  :
                  <div className={`hero-bottom-text-item text-[1vw] text-[#222] ${(i==1)?"ml-[31vw]":""}`}>{v}</div>
                }
                </>
              )
            })
           }
        </div>

        <div className="text-animtion w-full text-center mt-[3vw] h-[30px] overflow-hidden">
          <div className="text-dow  text-xl w-full">scroll down</div>
        </div>
    </div>

  )
}
