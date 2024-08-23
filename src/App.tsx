import { useEffect, useRef } from "react"
import Button from "./components/Button/Button"
import gsap from "gsap"

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

  return (
    <div className=' 2xl:relative max-w-[1440px] min-h-screen margin flex flex-col gap-2 p-4'>
      <header 
      ref={headerRef}
       className="flex flex-row items-center justify-around w-full montserrat">
            <img id="logo" src="/public/logo.svg" className= " opacity-0 w-[75px] h-11" alt="" />
            <nav id="items" className="flex opacity-0 items-center justify-around gap-6 text-white">
              <a  className="link" href="#">about</a>
              <a  className="link " href="#">services</a>
              <a  className="link" href="#">TECHNOLOGIES</a>
              <a  className="link " href="#">HOW TO</a>
            </nav>
            <div className="flex items-center justify-center gap-5">
                    <button id="btn1" className=" opacity-0 link text-white py-2 px-4 border rounded-2xl border-white">CONTACT US</button>
                    <Button typeB="S" id="btn2" className="opacity-0">JOIN HYDRA</Button>  
            </div>
      </header>
      <section className="relative  grid grid-cols-2 lg:pt-10">
          <div className="flex flex-col min-h-[450px] items-center p-6 justify-center">
              <div className="flex flex-col items-start h-full justify-around">
              <p id="title" className=" opacity-0 text-5xl font-bold text-white montserrat">
              <span className="gradientText">Dive</span> Into The Depths <br/> 
              of
              <span className="gradientText"> Virtual Reality</span>
              </p>

              <p id="text" className="text-white opacity-0 text-base max-w-[450px] montserrat flex flex-row flex-wrap font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .
              </p>

              <div id="button" className="flex opacity-0 items-center">
                  <Button className=" montserrat flex items-center justify-center" typeB="B">BUILD YOUR WORLD</Button>
                  <img src="/public/outline/arrow-small-right.svg" alt="" />
              </div> 
              </div> 
          </div>
          <div className=" h-full flex items-center justify-center">
            <img id="mask" className="opacity-0" src="/public/Maskgroup.png" alt="" />
          </div>
      </section>
    </div>
  )
}

export default App
