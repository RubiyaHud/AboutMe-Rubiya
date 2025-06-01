import React from 'react'
import Container from '../Container'
import Image from '../Image'
import aboutMeImg from '../../assets/aboutMeImg.png'
import Flex from '../Flex'
import RotatingDivs from '../RotatingDivs'
import RotatingCircle from '../RotatingCircle'

const CareerObjLayout = ({ id }) => {
    return (
        <section id={id} className="py-[96px]  bg-[#020617]">
            <Container>
                <Flex className={'justify-between'}>
                    <div className='w-[400px]'>
                        <RotatingCircle />
                    </div>
                    <div className='w-[650px]'>
                        <h3 className='text-[#EAB308] text-[42px] font-bold leading-16 pb-7'> Career Objective </h3>
                        <p className='text-amber-50 text-[16px] font-normal leading-7'>
                            Passionate and detail-focused frontend developer with a PhD in Computer Science, eager to turn complex ideas into intuitive, high-performance web interfaces. Skilled in modern frameworks like React, Redux, and Next.js, with a strong eye for design using Tailwind CSS and SASS. I thrive on building clean, scalable code and creating seamless user experiences through <span className="text-[#EAB308]"> Technical Excellence </span> and <span className="text-[#EAB308]"> Frontend Innovation </span>. Committed to <span className="text-[#EAB308]"> Continuous Learning</span> and <span className="text-[#EAB308]"> Skill Growth </span>, I value <span className="text-[#EAB308]">Team Collaboration</span> and believe in the power of shared knowledge to drive success. Now seeking an opportunity to apply my academic background and hands-on project experience to real-world challenges, contribute to a <span className="text-[#EAB308]"> Forward-Thinking </span> team, and pursue ongoing <span className="text-[#EAB308]"> Professional Development </span>.
                        </p>


                    </div>



                </Flex>
            </Container>
        </section>
    )
}

export default CareerObjLayout