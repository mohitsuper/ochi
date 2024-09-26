import React, { useEffect, useState } from 'react'

export default function EyeBoll() {
  let [Inactivemouce,setInactivemouse] = useState(false)  

  let [toggle,setToggle] = useState(false)
//   let [postion,setPostion] = useState([x,y])

  let MouseEnter=()=>{
      setInactivemouse(true);
      setToggle(!toggle);
  }

  
  let MouseLeave=()=>{
      setInactivemouse(false);
      setToggle(!toggle);
  }

  let [x,setX] = useState(0)
  let [y,setY] = useState(0)
 let movingMOuse = ()=>{
    document.addEventListener('mousemove',(e)=>{
        setX(e.x)
        setY(e.y)
    })
 }


    let activeItem = ()=>{

      if(!toggle){
        MouseEnter()
      }
      else{
        MouseLeave()  
      }
  }

  return (
    <div  className={`eye-container min-h-[100vh] w-full  bg-cover bg-center relative`} data-scroll data-scrol-speed="-.3" onClick={activeItem} onMouseMove={movingMOuse} >
        
        <div style={{
        top:y-10,
        left:x-10,
    }}
     className={`moving-curser absolute z-20 px-5 py-2 rounded-[20px] text-white  top-1/2 left-1/2 bg-[#222] justify-center items-center`}>{Inactivemouce?"PAUSE":"PLAY"}</div>
        {
            (Inactivemouce)?
             <video src='/asstes/images/1.mp4' className='w-full h-full object-cover' loop muted autoPlay/>
            :
            <div className=' bg-cover bg-cenetr '>
                <img src="/asstes/images/eye.jpg" alt="" className='w-full h-full object-cover absolute' />
                <div className="eye flex gap-[5vw] bg-red-500 ">
          <div className="gola">
            <div className="black-gola">
                <div className="small-gola"></div>
            </div>
          </div>
          <div className="gola">
            <div className="black-gola">
                <div className="small-gola"></div>
            </div>
          </div>
        </div>
            </div>
        }

    </div>
  )
}
