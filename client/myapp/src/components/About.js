import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Timeline } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiProgression } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { MdDeveloperMode } from "react-icons/md";

import Navbar from './Navbar';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const navigate = useNavigate();

    return (
      <>
        <div className=' h-[15vh] fixed top-0 left-0 w-full z-50 bg-white'>
          <Navbar />
        </div>
      
        <div className='p-8 py-10 mt-10 overflow-x-hidden bg-white text-black'>
          <div className='ml-6 border mx-auto border-orange-400 border-3 p-2 rounded-md bg-black' data-aos="fade-left" data-aos-duration="1000">
            <h2 className='text-center md:text-6xl text-white underline font-semibold'>Bio</h2>
            <p className='md:text-5xl md:p-9 text-white'>
              I am a passionate and detail-oriented MERN stack developer with a strong background in building full-stack web applications. With a degree in Mechanical Engineering from Rgukt University, I have honed my skills in front-end and back-end development, as well as database management.
            </p>
          </div>
          <br/>

          <Timeline className='text-white font-gothic ml-5' mode="left" items={[
            { dot: (
              <MdDeveloperMode
                style={{
                  fontSize: '26px',
                }}
              />
            ),
            children: <div className='shadow-xl md:text-4xl md:w-[700px] lg:w-[1100px] lg:text-6xl lg:h-[40vh] lg:p-5 border border-orange-400 border-3 p-2 rounded-md bg-black ' data-aos="fade-right" data-aos-duration="1300">
                <h2 className='text-center text-white underline font-semibold'>Internship</h2>
                <br/>
                <ul><li>Company: DataEvolve Solutions</li><li>Status: OnGoing</li></ul>
              </div>,
              color: "blue"
            },
            {
              dot: (
                <GiProgression
                  style={{
                    fontSize: '26px',
                    borderRadius :'50%'
                  }}
                />
              ),
              children: <div className='shadow-xl md:text-4xl md:w-[700px] border border-orange-400 border-3 p-2 rounded-md bg-black lg:w-[1100px] lg:text-6xl  lg:p-5 ' data-aos="fade-right" data-aos-duration="1300">
                <h2 className='text-center text-white underline font-semibold'>Course</h2>
                <br/>
                <ul><li>Academy: NxtWave</li><li>Status: completed</li></ul>
              </div>,
              color: "green",
            },
            {
              dot: (
                <FaUserGraduate
                  style={{
                    fontSize: '26px',
                    borderRadius :'50%'
                  }}
                />
              ),
              children: <div className='shadow-xl md:text-3xl md:w-[700px] border w-auto border-orange-400 border-3 p-2 rounded-md bg-black lg:w-[1100px] lg:text-6xl  lg:p-5' data-aos="fade-left" data-aos-duration="1500">
                <h2 className='text-center text-white underline font-semibold'>Graduation -- 2019-2023</h2>
                <br/>
                <ul><li>University: IIIT RkValley</li><li>CGPA: 8.35</li><li>Specialization: MECH</li></ul>
              </div>,
              color: "green",
            },
            {
              dot: (
                <FaUniversity
                  style={{
                    fontSize: '26px',
                    borderRadius :'50%'
                  }}
                />
              ),
              children: <div className='shadow-xl md:text-3xl md:w-[700px] w-auto border border-orange-400 border-3 p-2 rounded-md bg-black lg:w-[1100px] lg:text-6xl  lg:p-5' data-aos="fade-right" data-aos-duration="1700">
                <h2 className='text-center text-white underline font-semibold'>PUC -- 2017-2019</h2>
                <br/>
                <ul><li>University: IIIT RkValley</li><li>CGPA: 7.48</li><li>Specialization: MBIPC</li></ul>
              </div>,
              color: "green",
            },
            {
              dot: (
                <FaSchool
                  style={{
                    fontSize: '26px',
                    borderRadius :'50%'
                  }}
                />
              ),
              children: <div className='shadow-xl md:text-3xl md:w-[700px] border border-orange-400 border-3 p-2 rounded-md bg-black lg:w-[1100px] lg:text-6xl  lg:p-5' data-aos="fade-left" data-aos-duration="1900">
                <h2 className='text-center text-white underline font-semibold'>SSC -- 2017</h2>
                <br/>
                <ul><li>School: Z.P.H School</li><li>CGPA: 9.7</li><li>Board: BSEAP</li></ul>
              </div>,
              color: "green",
            }
          ]}/>
          
        </div>
        <div className='flex justify-center items-center shadow-xl'>
            <button className='bg-orange-500 w-full p-3 text-white shadow-2xl rounded-tl-lg rounded-tr-lg  font-extrabold' onClick={()=>navigate("/skills")}>Skills</button>
          </div>
      </>
    );
}

export default About;
