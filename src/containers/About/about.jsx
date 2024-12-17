import React from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants'
import './About.scss';

import { AppWrap,MotionWrap } from '../../Wrapper';

const abouts = [
    {
        title:'Web Design',description:'I create modern and visually appealing web designs using tools like Figma and Adobe XD, focusing on intuitive user experiences, clean layouts, and responsive designs.',imgUrl:images.about01
    },
    {
        title:'Frontend Developement',description:'I build interactive user interfaces with technologies like React, Next.js, Tailwind CSS, Bootstrap, and Vanilla CSS, ensuring that websites are fast, responsive, and visually engaging across all devices.',imgUrl:images.about02
    },
    {
        title:'Backend Developement',description:'I develop robust server-side applications using Node.js, Express, MongoDB, SQL, and other backend technologies, focusing on scalability, performance, and smooth data handling between the server and frontend.',imgUrl:images.about03
    },
    {
        title:'Fullstack Developement',description:' I specialize in both frontend and backend development, utilizing tools like React, Next.js, Node.js, Express, and MongoDB to create complete, full-fledged web applications with seamless user interfaces and efficient server-side architecture.',imgUrl:images.about04
    },
]

const About = ()=>{
    return (
        <>
        <h2 className="head-text">
            I Know that <span> Good Development </span> <br/> means <span> Good Bussiness</span>
        </h2>
        <div className='app__profiles'>
            {abouts.map((about,index)=>(
                <motion.div
                whileInView={{opacity:1}}
                whileHover={{scale:1.1}}
                transition={{duration:0.5,type:'tween'}}
                className='app__profile-item'
                key={about.title+index}
                >
                    <img src={about.imgUrl} alt={about.title}/>
                    <h2 className='bold-text' style={{marginTop:20}}>
                        {about.title}
                    </h2>
                    <p className='p-text' style={{marginTop:10}}>
                        {about.description}
                    </p>
                </motion.div>
            ))}
        </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(About,'app__about'),
    'about',
    "app__whitebg"
);