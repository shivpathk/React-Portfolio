import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap,MotionWrap } from "../../Wrapper";

import "./Work.scss";

const works = [
  {
  title: "Best Sketch Artist",
  description:
    "A creative, artistic web app built with the MERN stack for promoting hand-drawn custom sketch art. Includes SEO-focused blogs, admin controls, dynamic image galleries, and a fully responsive, modern UI.",
  imgUrl: images.sketchartist,
  projectLink: "https://best-sketch-artist.vercel.app/",
  codeLink:"https://github.com/shivpathk",
  tags:["MERN Projects"]
},
  {
  title: "Hanuman Care Rail Ambulance",
  description:
    "A high-urgency medical transport service site built with Next.js. Designed for SEO and speed, it features responsive design, optimized content delivery, and trust-driven UI elements for fast conversions and better reach across India.",
  imgUrl: images.railambulance,
  projectLink: "https://www.railambulance.co.in/",
  codeLink:"https://github.com/shivpathk", // github profile link used
  tags:["Next Projects"]
},
{
  title: "Hanuman CRM",
  description:
    "An internal CRM dashboard crafted with MERN stack for Hanuman Care. It supports role-based access, real-time tracking, analytics, and powerful admin tools to manage leads, operations, and ambulance deployment effectively.",
  imgUrl: images.hanumancrm,
  projectLink: "https://hanuman-crm.vercel.app/",
  codeLink:"https://github.com/shivpathk",
  tags:["MERN Projects"]
},
{
  title: "Hanuman Care",
  description:
    "Official website of Hanuman Care – an emergency ambulance and healthcare service provider. Built with Next.js to ensure lightning-fast load times, modern UI/UX, and SEO-first approach for local and national reach.",
  imgUrl: images.hanumancare,
  projectLink: "http://hanumancare.com/",
  codeLink:"https://github.com/shivpathk",
  tags:["Next Projects"]
},

{
  title: "Dr. Niraj Jha – Personal Website",
  description:
    "A sleek, personal portfolio site for Dr. Niraj Jha designed using Next.js. Optimized for professional branding, fast load, and SEO, this website showcases Dr. Niraj’s expertise, achievements, and services in a polished interface.",
  imgUrl: images.drnirajjha,
  projectLink: "https://www.drnirajjha.in/",
  codeLink:"https://github.com/shivpathk",
  tags:["Next Projects"]
},
{
  title: "Lakshay Enterprises",
  description:
    "Corporate website for Lakshay Enterprises developed with Next.js. It includes service showcases, contact forms, and business-oriented UI tailored for industrial and solar solutions, with SEO-friendly architecture.",
  imgUrl: images.lakshay,
  projectLink: "https://enterpriseslakshay.com",
  codeLink:"https://github.com/shivpathk",
  tags:["Next Projects"]
},

{
  title: "Yatri Restro",
  description:
    "Restaurant website designed using the MERN stack. Clean UI, mobile-first responsiveness, food category filters, image galleries, and reservation-friendly structure – all packed for a delightful user experience.",
  imgUrl: images.yatri,
  projectLink: "https://www.yatrirestro.com/",
  codeLink:"https://github.com/shivpathk",
  tags:["MERN Projects"]
},
  {
    title: "Tiffin Ghar",
    description:
    "Tiffin Ghar is a user-friendly website built with MERN stack and Tailwind. Designed with a responsive layout and smooth animations, with robust features like user authentication, secure payments, and real-time updates",
    imgUrl: images.tiffinghar,
    projectLink: "https://tiffinghar.onrender.com/",
    codeLink:"https://github.com/shivpathk/TiffinManagment",
    tags:["MERN Projects"]
  },
  {
    title: "Textinger Chat App",
    description:
      "This Realtime Chat Web Application is a drawing inspiration from popular platforms like WhatsApp. Developed with React, Redux, SCSS for frontend styling, and Firebase for backend services",
    imgUrl: images.textinger,
    projectLink: "https://textinger-dc9bc.web.app/",
    codeLink:"https://github.com/shivpathk/Textinger",
    tags:["MERN Projects"]
  },
  {
    title: "BookStore",
    description:
      "web app with the MERN stack (MongoDB, Express, React, Node.js), Vite, and Tailwind CSS. The application includes an admin dashboard for publishing, editing, and deleting books",
    imgUrl: images.bookstore,
    projectLink: "https://bookstore-frontend-nd98.onrender.com/",
    codeLink:"https://github.com/shivpathk/BookStore",
    tags:["MERN Projects"]
  },
  {
    title: "Anandians",
    description:
      "ANANDIANS is a cutting-edge web application built with Next.js, Tailwind CSS, TypeScript, and shadcn. It boasts a sleek, responsive design complemented by seamless animations, ensuring an engaging user experience across devices.",
    imgUrl: images.anandians,
    projectLink: "https://anandians.vercel.app/",
    codeLink:"https://github.com/shivpathk/anandians",
    tags:["Next Projects"]
  },
  {
    title: "News Today",
    description:
    "Check out my new Project News Today. it is a website created by React and Bootstrap , i used news api for latest news data and also added feature to see various categories which are working smothly so you can read various news topic here",
    imgUrl: images.news_today,
    projectLink: "https://shivpathk-news-today.netlify.app/",
    codeLink:"https://github.com/shivpathk/news-today",
    tags:["React Projects"]
  },
  {
    title: "Flipkart Clone",
    description:
      "This is a Flipkart clone which has leveraged the MERN stack to power its web applications. MERN, which comprises MongoDB, Express.js, React.js, and Node.js, provides Flipkart with a robust and efficient foundation for backend development and frontend rendering.",
    imgUrl: images.fc,
    projectLink: "https://flipkart-shivpathk.vercel.app/",
    codeLink:"https://github.com/shivpathk/Flipkart-Clone-MERN-stack",
    tags:["MERN Projects"]
  },
  {
    title: "Amazon Clone",
    description:
      "I created Amazon clone using React.js and Tailwind CSS , i have also used authentication with the help of React library Auth0 and created login into this website , website is responsive",
    imgUrl: images.amzn,
    projectLink: "https://shivpathk-amazon-clone.netlify.app/",
    codeLink:"https://github.com/shivpathk/amazon-clone",
    tags:["React Projects"]
  },
  {
    title: "Weather Check",
    description:
    "This Weather Checker web application is built using Next.js and TypeScript, offering a robust, responsive, and user-friendly interface for checking real-time weather updates. Powered by the OpenWeatherMap API",
    imgUrl: images.weather,
    projectLink: "https://weather-shivpathk.vercel.app/",
    codeLink:"https://github.com/shivpathk/weather-checker",
    tags:['Next Projects']
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "This is the famous game tic tac toe application , i have created this project while learning react , i have used react , framer motion and scss to create this application it has good design and it's responsive, enjoy playing it",
    imgUrl: images.ttt,
    projectLink: "https://shivpathk-tic-tac-toe.netlify.app/",
    codeLink:"https://github.com/shivpathk/TIC-TAC-TOE-GAME",
    tags:['React Projects']
  },
  {
    title: "To Do List",
    description:
    "It is a todo application created by me while learning TypeScript and backend Development. We can add our daily task in it and when the task is done we can just simply mark it that it is done",
    imgUrl: images.tdl,
    projectLink: "https://shivpathk-to-do-app.netlify.app/",
    codeLink:"https://github.com/shivpathk/todo-app-project",
    tags:["MERN Projects"]
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [animateCard, setanimateCard] = useState({ y: 0, oppacity: 1 });
  const [filterWork, setFilterWork] = useState([])

  useEffect(() => {
    setFilterWork(works)
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setanimateCard({y:100,opacity:0})

    setTimeout(() => {
      setanimateCard({y:0,opacity:1})

      if(item==='All Projects'){
        setFilterWork(works)
      }
      else{
        setFilterWork(works.filter((work)=>work.tags.includes(item)))
      }

    }, 500);

  };
  return (
    <>
      <h2 className="head-text">
        My Creative <span> Portfolio </span> Section
      </h2>
      <div className="app__work-filter">
        {["React Projects","Next Projects", "MERN Projects", "All Projects"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{marginTop:10}}>{work.description}</p>


              <div className="app__work-button">

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <button className="btn"> <AiFillGithub /> Code</button>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <button className="btn"> <AiFillEye /> Live Demo</button>
                </a>
              </div>



              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work,'app__works'),
  'work',
  "app__primarybg"
  );