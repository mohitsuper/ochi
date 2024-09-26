import React, { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './commntes/Navbar/Navbar'
import Hero from './commntes/Hero/Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ReactDOM from "react-dom";
import Loader from './commntes/loader/Loader'
import AnimeText from './commntes/Animetext/AnimeText'
import LocomotiveScroll from 'locomotive-scroll';
import About from './commntes/about/About'
import EyeBoll from './commntes/EyeBoll.jsx/EyeBoll'
export default function App() {
  let tl = gsap.timeline();
  
  const locomotiveScroll = new LocomotiveScroll();
   console.log(locomotiveScroll)
    useGSAP(()=>{
    tl.to(".main",{
      padding:0,
      delay:3,
      height:"100%",
      background:"#f1f1f1",
      display:"block",
    },)

    tl.to(".main-container",{
      borderRadius:0,
      duration:0.1,
    },)

    tl.to(".main-container",{
      overflow:"none",
    },)
  })
  return (
    <div className="main bg-[#212121] py-[100px] px-[150px] h-screen flex justify-center " >
    <div className='main-container  bg-[#f1f1f1f1] h-full '>
      <Loader  />
      <Navbar/>
      <Hero/>
      <AnimeText/>
      <About/>
      <EyeBoll/>
    </div>
    </div>
  )
}
