import React, { useState } from 'react'
import Line from '../Line/Line'
import '../Fetures/Fetures.css'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { delay, motion } from "framer-motion"
import Heading from '../Mincommntes/Heading'

export default function Fetures() {

let [Hovertext,setHovertext] = useState(false)

let [Activeindex,setActiveIndex] = useState(0)

let FeturesData =[
         {
          src: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
          text:"cardbord spaceship",
         },
         {
          src:"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
          text:"ahh2 matt horen",
         },
         {
          src:"https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
          text:"fyda"
         },
         {
          src:"https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
          text:"vise",
         }
        
        ]

  return (
    <>
    <div className=' w-full min-h-[100vh] bg-[#f1f1f1] relative pb-[2vw]'  data-scroll data-scroll-speed ="-.1">
        <Heading data={"Featured projects"}/>
        <Line/>

        <div className="feture-container relative">
        <div className={`overlay-text ${Hovertext?"opacity-1":"opacity-0"}`}>
          {
            FeturesData.map((v,i)=>{
              return(
                <div className="overlay" key={i}>
                  <h3 className={`${(Activeindex == i)?"h3-active opacity-1 block":""} `} >{v.text.split().map((v,i)=>{
                    return(<motion.span 
                      initial={{y:"100%"}}
                      animate={Hovertext?{y:"0"}:{y:"100%"}}
                       transition={{duration:0.5,delay:i*.06}}
                       className='t-span inline-block' 
                       key={i}>
                        {v}
                        </motion.span>)
                  })}</h3>
                </div>
              )
            })

          }
       </div>
       <div className="grid grid-cols-2 px-[50px] gap-[2vw] relative">
       {
            FeturesData.map((v,i)=>{
              return(
                <FeaturedCards src={v.src} key={i} i={i} setActiveIndex={setActiveIndex} Hovertext={Hovertext} setHovertext={setHovertext}/>
              )
            })
          }

       </div>

        </div>


    </div>
  </>
  )
}

function FeaturedCards({Hovertext,setHovertext,src,i,setActiveIndex}){
   console.log(Hovertext)
    return (
      <div className='' onMouseEnter={()=>{
        setActiveIndex(i)
        setHovertext(true)}} onMouseLeave={()=>setHovertext(false)} >
        <div className="heading py-[3vw]" > 
        <h4 className='flex items-center gap-5 text-2xl uppercase'><span className='w-[20px] h-[20px] rounded-full bg-[#222] inline-block'></span>
        cardBord Spceship
        </h4>
        </div>
        <div className="feture-image w-full h-[75vh] ">
            <img src={src} alt="" className='w-full h-full object-cover object-top ' srcset="" />
        </div>
      </div>

    )
}
