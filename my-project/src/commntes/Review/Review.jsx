import React from 'react'
import Heading from '../Mincommntes/Heading'
import Line from '../Line/Line'
import { TfiArrowTopRight } from "react-icons/tfi";
import "../Review/Review.css"

export default function Review() {
  return (
    <div data-scroll data-scroll-speed="-.2">
        <Heading data={"Clients’ reviews"}/>
        <Line/>
        <div className="c-container px-[50px] flex justify-between py-[2vw]">
            <a href="#" className='active'>karman verntures</a>
            <div className="servies flex flex-col">
            <h3 className='text-[1.3vw] mb-[1vw]'>Services</h3>
            <div className='btu-container flex gap-3'>
              <button>investor deck</button>
             <span className='gola  hidden border-none'><TfiArrowTopRight/></span>
             </div>
             <div className='btu-container flex gap-3 mt-2'>
              <button>sales deck</button>
             <span className='gola  hidden border-none'><TfiArrowTopRight/></span>
             </div>            </div>
            <div className="w-b w-[35%]">
            <h3 className='text-[1.3vw]'>William Barnes</h3>
             <div className="img w-[30%] py-[1vw]">
                <img src="/asstes/images/c1.png" className='h-full w-full object-cover rounded-lg' alt="" />
             </div>
             <p className='text-[1.2vw]'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>
            <h3 className='text-[1.3vw] text-[#00000059]'>READ</h3>
        </div>
    </div>
  )
}
