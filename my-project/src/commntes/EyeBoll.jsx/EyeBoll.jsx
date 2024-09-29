import React, { useEffect, useState } from 'react'

export default function EyeBoll() {
  let [Activebg,setActiveng] = useState(false);
  let [postion,setPostion] = useState({
    x:0,
    y:0,
  })


  let changeBG =()=>{
    setActiveng(!Activebg);
  }


  useEffect(() => {
    const handleMouseMove = (e) => {
      setPostion({ x: e.clientX, y: e.clientY });
    };
    const mainElement = document.querySelector(".main");
    if (mainElement) {
      mainElement.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (mainElement) {
        mainElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className='main w-full min-h-[100vh] relative' onClick={changeBG} data-scroll data-scroll-section data-scroll-speed="-.3">
      <div style={{
        top: postion.y,
        left:postion.x,
      }}
       className={`mouse-moving px-5 text-white rounded-[20px] bg-[#333] fixed z-50 ${(Activebg)?"block":"hidden"}`}>PAUSE</div>


      <div className=' flex justify-center items-center h-[100vh] w-full relative'>
        <div className="w-full h-full absolute top-0 left-0 ">
        {
          Activebg?
          <video src="/asstes/images/1.mp4" autoPlay loop muted className='w-full h-[100%] object-cover duration-5'/>
          :
          <img src='/asstes/images/eye.jpg' className='w-full h-[100%] object-cover'/>
        }
        </div>
        <MovingEye Activebg={Activebg} position={postion}/>
      </div>
    </div>
  )
}


function MovingEye({Activebg,position}){

  return(
    <div className={`gola  flex gap-[2vw] h-[300px] w-[500px] items-center relative ${(Activebg)?"hidden":"block"}`}>
    <div  className="inside-gola w-1/2 h-[85%] rounded-full bg-white flex justify-center items-center">
     <div className="black-gola w-[75%] h-[75%] rounded-full bg-[#000] relative flex justify-center items-center text-white">
      <div style={{
          transform: `rotate(${position.y}deg)`,
      }} className="w-full  h-10 ">
        
      <div className="moving-eye-bol w-[30px] h-[30px] rounded-full bg-white "></div>
      </div>
     </div>
     
    </div>
    <div className="inside-gola w-1/2 h-[85%] rounded-full bg-white flex justify-center items-center">
     <div className="black-gola w-[75%] h-[75%] rounded-full bg-[#000] relative flex justify-center items-center">
     <div style={{
          transform: `rotate(${position.y}deg)`,
      }} className="w-full  h-10 ">
      <div className="moving-eye-bol w-[30px] h-[30px] rounded-full bg-white "></div>
      </div>    
      
       </div>
     
    </div>
    </div>
  )
}