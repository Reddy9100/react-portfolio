// Projects.js
import React , {useEffect} from 'react';
import FoodMunch from '../assests/assests/certi/foodMunch.jpeg';
import { FaLink } from "react-icons/fa";
import TodoList from "../assests/assests/certi/TodoList.jpeg"
import loginImage from "../assests/assests/certi/loginImage.jpeg"
import WikipediaImage from "../assests/assests/certi/wikipedia.jpeg"
import nxtrendsImage from "../assests/assests/certi/nxtTrends.jpeg"
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
const projects = [
  {
    id: 1,
    title: "Project 1",
    URL: "https://reddy9100.github.io/foodmunch/",
    imageUrl: FoodMunch,
    description: "FoodMunch is a restaurant website where consist of lot of varieties of dishes.",
    Technologies: "Html,Css,Bootstrap"
  },
  {
    id: 2,
    title: "Project 2",
    URL: "https://reddy9100.github.io/todolist/",
    imageUrl: TodoList,
    description: "The TodoList project is a web application designed to help users manage their tasks efficiently.",
    Technologies: "Html,Css,Bootstrap,javaScript"
    // other properties
  },
  {
    id: 3,
    title: "Project 2",
    URL: "https://reddy9100.github.io/wikipedia/",
    imageUrl:WikipediaImage,
    description : "The Wikipedia search project aims to develop a user-friendly application that enables users to search for articles on Wikipedia efficiently. The project involves implementing a search functionality that interacts with the Wikipedia API to retrieve relevant articles based on user queries.",
    Technologies: "Html,css,JavaScript"
    // other properties
  },
  {
    id: 4,
    title: "Project 2",
    URL: "https://reddy9100.github.io/todolist/",
    imageUrl: loginImage,
    description : "The Login/Signup project with JWT (JSON Web Tokens) authentication is a web application designed to provide secure user authentication and authorization mechanisms.",
    Technologies: "React ,Tailwind Css, Node.js, Mysql"
    // other properties
  },
  {
    id: 5,
    title: "Project 2",
    URL: "https://nnrnxttrendz.ccbp.tech/login",
    imageUrl: nxtrendsImage,
    description : "The Login/Signup project with JWT (JSON Web Tokens) authentication is a web application designed to provide secure user authentication and authorization mechanisms.",
    Technologies: "React ,Tailwind Css, Node.js, Mysql"
    // other properties
  },
  
  // Add more projects as needed
];

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
  }, []);
    return (
      <>
        <div className='h-[15vh] fixed top-0 left-0 w-full z-50 bg-white'>
          <Navbar />
        </div>
        <div className="container mt-16 mx-auto px-4 py-8 overflow-x-hidden">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-white shadow-md rounded-lg p-6" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                <h3 className="text-xl font-semibold mb-2">
                  <a href={`${project.URL}`} className="flex items-center">
                    <FaLink className="ml-1 w-10 rounded-xl bg-orange-500 text-white p-1" />
                  </a>
                </h3>
                {project.imageUrl && (
                  <img src={project.imageUrl} alt="ProjectImage" className="mb-2" />
                )}
                <p className="text-gray-700">{project.description}</p>
                <br />
                <p className="text-orange-500 font-extrabold">{project.Technologies}</p>
              </div>
            ))}
          </div>
        </div>
        <button className='bg-orange-500  p-3 text-white font-extrabold rounded-tl-xl rounded-tr-xl  w-full' onClick={() => navigate("/services")}>Services</button>
      </>
    );
};

export default Projects;
