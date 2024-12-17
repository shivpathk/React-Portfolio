import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap,MotionWrap } from "../../Wrapper";

import "./Work.scss";

const works = [
  {
    title: "Bajrang AI",
    description:
    "BajrangAI is a powerful medical AI chatbot developed with Next.js, React, Tailwind CSS, OpenAI API, and Gemini API. It delivers expert medical knowledge and guidance, offering a reliable and responsive experience for users.",
    imgUrl: images.bajrangai,
    projectLink: "https://bajrangai.vercel.app/",
    codeLink:"https://github.com/shivpathk/hanuman",
    tags:["Next Projects"]
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
    tags:["MERN Project"]
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
    title: "Sketch Artist Deepak",
    description:
    "This is a react frontend web application which has very beautiful design and animation and It is also fully responsive. The moto of creating this is site is to help one of my very talented artist",
    imgUrl: images.deepak_art,
    projectLink: "https://deepakat1.netlify.app/",
    codeLink:"https://github.com/shivpathk/deepak_artist_website",
    tags:["React Projects"]
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