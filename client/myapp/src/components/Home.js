import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import AOS from "aos";
import HomeImage from "../assests/home.jpg";
import Navbar from "./Navbar";
import {ToastContainer,toast} from "react-toastify"
import resume from "../assests/assests/Reddysai_resume_Updated.pdf"
import "aos/dist/aos.css";

import click from "../assests/assests/click.wav"


const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  

  useEffect(() => {
    AOS.init({ duration: 2000 });
    animateName("Reddysai Kanthuri");
    return () => {
      AOS.refresh();
    };
  }, []);

  const animateName = (fullName) => {
    let i = 0;
    const interval = setInterval(() => {
      setName(fullName.substring(0, i + 1));
      i++;
      if (i === fullName.length) {
        i = 0;
      }
    }, 200);
  };

  const downloadResume = () => {
    // Create a new anchor element
    const anchor = document.createElement("a");
    // Set the href attribute to the path of the resume file
    anchor.href = resume;
    // Set the download attribute to specify the default filename
    anchor.download = "resume.pdf";
    const clickaudio = new Audio(click)
    clickaudio.play()
    toast.success('Resume Successfully Downloaded')
    anchor.click();

    
  };

 

  return (
    <>

    

    
    <div className=' h-[15vh]  bg-white'>
    <ToastContainer/>
    <Navbar className="fixed top-0 left-0 w-full z-50"/>
    </div>
    <div className="main  font-gothic md:flex justify-around items-center bg-match">
      <div className="left p-8 py-10 bg-match text-off  flex flex-col md:w-[50vw] md:h-[85vh] md:flex md:bg-cherry md:flex-col md:justify-center md:items-center md:ml-10 md:rounded-tl-lg md:rounded-bl-lg" data-aos="fade-left">
        <h1 className="text-3xl font-gothic md:text-5xl">
          Myself <br /> <span className="text-orange-600 font-extrabold">{name}</span>
        </h1>
        <br />
        <h2 className="font-gothic text-2xl md:text-3xl">
          I'am a Full Stack Developer
        </h2>
        <br />
        <div className="flex justify-evenly items-center w-52 text-4xl text-off md:text-5xl md:w-[40vw]">
          <a rel="noreferrer"href="https://www.facebook.com/reddysai.sai.14" target="_blank"><FaFacebook /></a>
          <a href="https://github.com/Reddy9100" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/kanthuri-reddysai-621990251/" target="_blank"><FaLinkedin /></a>
        </div>
        <button className="mt-4 bg-orange-600 rounded-xl p-2 " onClick={downloadResume}>
         
          <IoDocumentText className="mx-auto" />
          Resume
        </button>
      </div>
      <div
        className="right bg-cherry  animate-glow md:h-[85vh] flex flex-col justify-center items-center md:w-[50vw] md:bg-white md:mr-10 md:rounded-tr-lg md:rounded-br-lg"
        data-aos="fade-right"
      >
        <img
          src={HomeImage}
          alt=""
          className="animate-bubble p-5 rounded-3xl h-[40vh] mt-20"
        />

        <div className="btn ">
          <button
            className="bg-white font-extrabold text-orange-500 w-[100vw] p-5 mt-10 h-[10vh] md:w-[25vw] hover:bg-black hover:text-white  hover:border-white border-black border-4 rounded-bl-lg rounded-br-lg  md:bg-match md:text-off md:rounded-2xl"
            onClick={() => navigate("/about")}
          >
            About Me
          </button>
        </div>
      </div>
     
    </div>
    </>
  );
};

export default Home;
