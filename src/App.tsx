import { useEffect, useRef } from "react"
import Button from "./components/Button/Button"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import logo from './assets/logo.svg'
import arrowsmall from './assets/outline/arrow-small-right.svg'
import mark from './assets/Maskgroup.png'
import arrow from './assets/arrowr.svg'
import introduction from './assets/introduction.png'
gsap.registerPlugin(ScrollTrigger)

function App() {

  const headerRef = useRef<HTMLHeadingElement>(null)

  useEffect(()=>{
    gsap.to('#logo',{
      opacity:1,
      delay:0.7,
      duration:0.7
    })
    gsap.to('#items',{
      opacity:1,
      delay:1,
      duration:1
    })
    gsap.to('#btn1',{
      opacity:1,
      delay:1.3,
      duration:1.3
    })
    gsap.to('#btn2',{
      opacity:1,
      delay:1.5,
      duration:1.5
    })

  },[])
  useEffect(()=>{
    gsap.to('#title',{
        opacity:1,
        x:10,
        delay:1,
        duration:1
    })
    gsap.to('#text',{
      opacity:1,
      x:10,
      delay:1.3,
      duration:1.3
    })
    gsap.to('#button',{
      opacity:1,
      x:10,
      delay:1.5,
      duration:1.5
    })
    gsap.to('#mask',{
      opacity:1,
      x:-10,
      delay:1.5,
      duration:1.5
    })
  },[])
  useEffect(()=>{
    gsap.to('#p',{
      scrollTrigger:'#p',
      opacity:1,
      x:42,
      delay:0.02,
      duration:0.7
    })
    gsap.to('#btn',{
      scrollTrigger:'#btn',
      opacity:1,
      x:-40,
      delay:0.02,
      duration:0.7
    })

    gsap.to('#sec',{
      opacity:1,
      duration:1,
      delay:1.6
    })
  },[])

  return (
    <div className=' 2xl:relative max-w-[1440px] min-h-screen margin flex flex-col gap-2 p-4'>
      <header 
      ref={headerRef}
       className="flex flex-row items-center justify-between lg:justify-around w-full montserrat">
            <img id="logo" src={logo} className= " opacity-0 w-[75px] h-11" alt="" />
            <nav id="items" className=" hidden lg:flex opacity-0 items-center justify-around gap-6 text-white">
              <a  className="link" href="#">about</a>
              <a  className="link " href="#">services</a>
              <a  className="link" href="#">TECHNOLOGIES</a>
              <a  className="link " href="#">HOW TO</a>
            </nav>
            <div className=" hidden lg:flex  items-center justify-center gap-5">
                    <button id="btn1" className=" opacity-0 link text-white py-2 px-4 border rounded-2xl border-white">CONTACT US</button>
                    <Button typeB="S" id="btn2" className="opacity-0">JOIN HYDRA</Button>  
            </div>
            <button className="lg:hidden">
              <img src="/public/Hamburger-Button.svg" className="w-[33px] h-[26px]" alt="" />
            </button>
      </header>
      <section className="relative  lg:grid flex flex-col-reverse gap-8 lg:grid-cols-2 pt-3 lg:pt-10">
          <div className="flex flex-col lg:min-h-[450px] justify-start lg:items-center lg:p-6 lg:justify-center">
              <div className="flex flex-col gap-4    items-center lg:items-start h-full justify-around">
              <p id="title" className=" opacity-0 text-[32px] lg:text-5xl font-bold text-white montserrat">
              <span className="gradientText">Dive</span> Into The Depths <br/>
              of
              <span className="gradientText"> Virtual Reality</span>
              </p>

              <p id="text" className="text-white hidden  opacity-0 text-base max-w-[450px] montserrat lg:flex flex-row flex-wrap font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .
              </p>

              <div id="button" className="flex opacity-0 items-center">
                  <Button className=" montserrat flex items-center justify-center" typeB="B">BUILD YOUR WORLD</Button>
                  <img src={arrowsmall} className="hidden lg:flex" alt="" />
              </div> 
              </div> 
          </div>
          <div className=" h-full flex items-center justify-center">
            <img id="mask" className="opacity-0" src={mark} alt="" />
          </div>
      </section>
      <section id="sec" className=" opacity-0 w-full mt-2 gap-4 flex items-center flex-col lg:flex-wrap pt-5 lg:pt-10 lg:px-10">
        <div className="flex w-full justify-center items-center lg:justify-around">
        <div className="flex flex-col ">
        <h1 className="montserrat text-white text-[26px] font-bold">INTRODUCTION</h1>
            <div className="flex items-center  gap-3">
            <h2 className="font-normal montserrat text-gray-50 text-2xl">TO HYDRA VR</h2>
              <img src={arrow} className="hidden lg:flex" alt="" />
            </div>
        </div>

        <p  className=" hidden lg:flex text-white montserrat leading-6 w-[652px] text-base font-normal " >Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
           
          <div className="flex flex-col lg:flex-row items-center  w-full justify-between lg:justify-around">
          <img src={introduction} className="w-[336px] h-[358px]" alt="" />
            <div className="relative flex flex-col items-center lg:items-start gap-3">
              <div className=" hidden lg:flex flex-col">
                <h1 className="montserrat text-white text-[26px] font-bold">ABOUT</h1>
                <h2 className="montserrat text-gray-50 font-normal text-2xl">HYDRA VR</h2>
              </div>
              <p id="p" className= " lg:text-base opacity-0 relative left-[-40px] text-white montserrat leading-6 w-[352px] lg:w-[630px]  text-xs font-normal ">Eget mi proin sed libero enim sed faucibus turpis. Nisl 
              rhoncus mattis rhoncus urna neque viverra justo. Vivamus 
                  at augue eget arcu dictum. Ultrices gravida dictum fusce 
                  ut placerat orci. Aenean et tortor at risus viverra adipisi
                  ng at in. Mattis aliquam faucibus purus in massa. Est 
                  placerat in egestas erat imperdiet sed. Consequat sem
                  per viverra nam libero justo laoreet sit amet. Aliquam 
                  etiam erat velit scelerisque in dictum non consectetur 
                  a. Laoreet sit amet cursus sit amet. Vel eros donec ac 
                  odio tempor orci dapibus. Sem nulla pharetra diam sit 
                  amet nisl suscipit adipiscing bibendum. Leo a diam 
                  sollicitudin tempor.
              </p>
              <Button id="btn" className=" opacity-0 relative right-[-40px]" typeB="B">LET’S GET IN TOUCH</Button>
            </div>
          </div>
           
      </section>
    </div>
  )
}

export default App
