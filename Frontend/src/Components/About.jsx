import React from 'react'
import './About.css'
import devImage from './developer.jpg'

function About() {
  return (
    <>
    <div className='about-container'>

         <h5 className="about">
                <span></span>
                ABOUT ME
        </h5>

        <h1 className='developer'>Passionate Developer</h1>
        <h1 className='build'>Who Loves to  <span>Build </span></h1>

        <p className='para'>
I'm a passionate Full-Stack Developer and BCA student who loves turning ideas into interactive, meaningful, and user-friendly digital experiences.
My journey in development started with curiosity about how websites work, and it has grown into a passion for building complete web applications. I work with modern technologies like React.js, JavaScript, Node.js, Express.js, and MySQL to create responsive frontends and powerful backend systems.
I believe in learning by building. From designing beautiful user interfaces to developing REST APIs and managing databases, I love exploring every part of the development process.


        </p>



        <div className='cards'>

            <div className='card1'>1+
                Years experience
            </div>
             <div className='card2'>10+
                Projects Completed
             </div>

              <div className='card3'>100%
               Dedication
             </div>
        </div>


        <img src={devImage}></img>

        <button className='Learn'>Learn More</button>

    </div>
    </>
  )
}

export default About
