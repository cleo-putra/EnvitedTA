import React from 'react'
import { Link } from 'react-router-dom';
import LandingImg from '../../img/landing-image.svg';

const Homepage = () => {
  return (
    <div className="mx-auto bg-[#F6F2FF] rounded-xl shadow-md overflow-hidden md:p-24 md:pl-44">
      <div className="md:flex">
      <div className="pt-8">
          <div className="tracking-wide text-center md:text-right text-4xl md:text-6xl font-bold text-[#240D57]">Imagine if</div>
          
          <div className="tracking-wide text-center md:text-right text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-transparent bg-clip-text">Snapchat</div>
          
          <div className="tracking-wide text-center md:text-right text-4xl md:text-6xl font-bold" style={{color: '#240D57'}}>had events.</div>
          <div className="text-base font-light px-5 text-center md:text-right text-[#4F4F4F] mt-4 md:w-3/5">Easily host and share events with your friends across any social media.</div>
        </div>
        <div className="m-0 md:order-first">
          <img className="w-full object-cover scale-75 md:scale-100" src={LandingImg} alt="Modern building architecture"/>
        </div>
        <div className="flex space-x-2 mb-10 justify-center md:block md:bottom-48 md:right-64 md:absolute md:mt-64 md:mb-0">
          <Link to="/event">
            <button className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] p-4 rounded-lg">🎉 <span className="text-white font-bold text-base pl-1">Create my event</span>	</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage