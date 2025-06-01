import React from 'react'
import { Link } from 'react-scroll';
const Menu = () => {
    return (
        <>

            <nav>
                <ul className='flex gap-8 font-lexendDeca text-[13px] font-normal text-white uppercase '>
                    <li className='cursor-pointer hover:text-[#FB01AA]'>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>

                    <li className='cursor-pointer hover:text-[#EF025F]'>
                        <Link to="careerObjective" smooth={true} duration={500}>Career Objective</Link>
                    </li>

                    <li className='cursor-pointer hover:text-[#EF025F]'>
                        <Link to="education" smooth={true} duration={500}>Education</Link>
                    </li>

                    <li className='cursor-pointer hover:text-[#EF025F]'>
                        <Link to="experience" smooth={true} duration={500}>Experiences</Link>
                    </li>

                    <li className='cursor-pointer hover:text-[#EF025F]'>
                        <Link to="skills" smooth={true} duration={500}> Skills </Link>
                    </li>

                    <li className='cursor-pointer hover:text-[#EF025F]'>
                        <Link to="myProjects" smooth={true} duration={500}>My Projects</Link>
                    </li>

                    <li className='cursor-pointer hover:text-[#EF025F]'>
                        <Link to="myWritings" smooth={true} duration={500}>My Writings</Link>
                    </li>

                    <li className='cursor-pointer hover:text-[#EF025F]'>
                        <Link to="contact" smooth={true} duration={500}> Contact </Link>
                    </li>

                    
                </ul>
            </nav>
        </>
    )
}

export default Menu

