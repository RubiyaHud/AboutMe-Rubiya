import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaLinkedinIn, FaGithub, FaFacebookF, FaDev, FaCodepen } from "react-icons/fa";
import Image from '../Image'
import rubiyaImgCircle from '../../assets/RubiyaImgCircle.png'

const HomeLayout = ({ id }) => {
  return (
    <div id={id} className='py-[96px] bg-secondaryBlack'>
      <Container>
        <Flex className={"justify-between"}>

          {/* Text Part Start w-[674px] */}
          <div className='mt-[100px] w-[600px]' >
            <div className=''>
              <h4 className=' text-[#EAB308] text-[20px] font-normal leading-7 pb-5'>Hello, Welcome</h4>
              <h1 className=' text-white text-[42px] font-bold leading-16 pb-4'>I m Rubiya Yasmin</h1>
              <p className=' text-amber-50 text-[16px] font-light leading-7 mb-2.5 '> A  Frontend Web Developer with a PhD  in Computer Science. I bring a strong academic foundation and hands-on skills in React, Redux ,  SASS ,  Tailwind CSS  and  Responsive  Web Development — along with a deep appreciation for clean, well-documented code.  </p>
            </div>
            <div class="flex mt-10 w-full">
              <p className='text-amber-300  font-light text-[16px] text-left'> Aspiring Frontend Web Developer  </p>
              <div class=" divider divider-horizontal divider-secondary "></div>
              <p className='text-amber-300 font-light text-[16px] text-left'> Clean Code & Modern UI with Structured Documentation  </p>

              <div class="divider divider-horizontal  divider-info"></div>
              <p className='text-amber-300 font-light text-[16px] text-left'> React · Redux · Tailwind CSS · SASS · Git · Responsive Design </p>
            </div>
          </div>
          {/* Text Part End */}

          {/* Image Part Start */}
          <div className='relative w-[427px] mt-[20px]'>
            <div className='bg-amber-400'>
              <div id='parallelogram'></div>
              <div id='parallelogram2'></div>
              {/* <div id='circle'></div> */}
              <div className='h-[380px] w-[380px] bg-white rounded-full absolute z-12 top-2.5 left-[65%] translate-x-[-50%]'>
                {/* <Image imgSrc={rubiyaImgCircle} imgAlt={'rubiyaImgCircle'}/> */}
              </div>
            </div>

            <div class="absolute top-[95%] mt-5 right-0 z-10 text-right">
              <p className=' text-[#EAB308] text-[16px] font-normal leading-7 mb-2.5 '>Find me on</p>
              <Flex className={"gap-x-3.5"}>
                <a href="https://www.linkedin.com/in/rubiyahud/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className='cursor-pointer p-[5px] text-amber-50 text-[30px] border border-y-zinc-400 rounded-sm  hover:text-[#FB01AA]' />
                </a>
                <a href="https://github.com/RubiyaHud" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='cursor-pointer p-[5px] text-amber-50 text-[30px] border border-y-zinc-400 rounded-sm  hover:text-[#FB9703]' />
                </a>
                <a href="https://www.facebook.com/RubiyaHud" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className='cursor-pointer p-[5px] text-amber-50 text-[30px] border border-y-zinc-400 rounded-sm  hover:text-[#FBED06]' />
                </a>
                <a href="https://codepen.io/RubiyaHud" target="_blank" rel="noopener noreferrer">
                  <FaCodepen className='cursor-pointer p-[5px] text-amber-50 text-[30px] border border-y-zinc-400 rounded-sm  hover:text-[#09A7F9]' />
                </a>
                <a href="https://dev.to/rubiyahud" target="_blank" rel="noopener noreferrer">
                  <FaDev className='cursor-pointer p-[5px] text-amber-50 text-[30px] border border-y-zinc-400 rounded-sm  hover:text-[#24D3C8]' />
                </a>


              </Flex>
            </div>
          </div>
          {/* Image Part End */}

        </Flex>

      </Container>
    </div>
  )
}

export default HomeLayout 