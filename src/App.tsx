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

  return (
    <div className='max-w-[1440px] min-h-screen margin flex flex-col p-4'>
      <header 
      ref={headerRef}
       className="flex flex-row items-center justify-around w-full ">
            <img id="logo" src="/public/logo.svg" className= " opacity-0 w-[75px] h-11" alt="" />
            <nav id="items" className="flex opacity-0 items-center justify-around gap-6 text-white">
              <a  className="  link" href="#">about</a>
              <a  className="link " href="#">services</a>
              <a  className="link" href="#">TECHNOLOGIES</a>
              <a  className="link " href="#">HOW TO</a>
            </nav>
            <div className="flex items-center justify-center gap-5">
                    <button id="btn1" className=" opacity-0 link text-white py-2 px-4 border rounded-2xl border-white">CONTACT US</button>
                    <Button id="btn2" className="opacity-0">JOIN HYDRA</Button>  
            </div>
      </header>
    </div>
  )
}

export default App
