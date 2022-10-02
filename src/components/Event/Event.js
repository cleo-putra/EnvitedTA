import React from 'react'
import Cake from '../../img/cake.png';
import {VscCalendar} from 'react-icons/vsc';
import {MdArrowForwardIos} from 'react-icons/md';
import {IoLocationOutline} from 'react-icons/io5';

const Event = () => {
  return (
    <div class="mx-auto bg-[#F6F2FF] rounded-xl overflow-hidden md:p-24 md:pl-44 md:h-full md:mt-24">
      <div class="md:flex">
        <div class="md:order-last md:right-64 md:absolute">
          <img class=" shadow-md h-full w-full object-cover md:h-full md:w-48 md:scale-150" src={Cake} alt="Cake birthday" />
        </div>
        <div class="p-4 md:p-0">
          <div class="tracking-wide text-2xl md:text-5xl text-[#240D57] font-bold">Birthday Bash</div>
          <div class="tracking-wide text-sm md:text-lg text-[#828282] font-normal pt-1">Hosted by <span className="font-bold">Elysia</span></div>
          <div className='card mt-5'>
            <div className='flex'>
              <div className='rounded-lg shadow-lg bg-white p-3'>
                <VscCalendar className='text-[#8456EC] text-md' /> 
              </div>
              <div className='px-2'>
                <p className="font-bold text-[#240D57] text-sm md:text-lg">18 August  6:00PM</p>
                <p className='text-[#4f4f4f] text-xs md:text-lg'>to <span className='font-bold text-xs'>19 August 1:00PM </span>UTC +10</p>
              </div>
              <div className='absolute right-1 md:inset-x-1/2 p-3 cursor-pointer'>
                <MdArrowForwardIos className="text-[#BDBDBD]"/>
              </div>
            </div>
          </div>
          <div className='card mt-3'>
            <div className='flex'>
              <div className='rounded-lg shadow-lg bg-white p-3'>
                <IoLocationOutline className='text-[#8456EC] text-md' /> 
              </div>
              <div className='px-2'>
                <p className="font-bold text-[#240D57] text-sm md:text-lg">Street Name</p>
                <p className='text-[#4f4f4f] text-xs md:text-lg'>Suburb, State, Postcode</p>
              </div>
              <div className='absolute right-1 p-3 md:inset-x-1/2 md: absolute cursor-pointer'>
                <MdArrowForwardIos className="text-[#BDBDBD] "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event