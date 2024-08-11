
import './App.css'
import About from './component/About'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Pricing from './component/Pricing'
import Service from './component/Service'
import Testimonial from './component/Testimonial'

function App() {


  return (
    <div className='font-primary overflow-x-hidden '>
     <Navbar/>
     <Hero/>
     <Service/>
     <About/>
     <Pricing/>
     <Testimonial/>
    {/* <h1 className='text-2xl font-normal'>MindLeap Mentall Wellness React Project Starter Files</h1> */}
   </div>
  )
}

export default App
