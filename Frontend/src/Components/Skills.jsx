import React from 'react'
import './Skills.css'

function Skills() {
  return (
   <>
   <div className='skills-container'>

      <h5 className="skills">
            <span></span>
             MY SKILLS
        </h5>

    <h1 className='skills'>Technologies I Work <span>With</span></h1>

    <p className='skills-para'>

    I specialize in frontend development using HTML, CSS, JavaScript, and React.js
    along with backend development using Node.js, Express.js.
    I also work with MySQL to design and manage databases
    and build seamless connections between frontend and backend systems.
    Among these I also have a knowledge of Git and Github
    </p>

   </div>


   <div className='skills-grid'>

  <div className='html'>
    <label>HTML5

    <span>Frontend</span>
    </label>
    <progress value="90" max="100">90%</progress>
  </div>


  
  <div className='css'>
    <label>CSS3

    <span>Frontend</span>
    </label>
    <progress value="85" max="100">85%</progress>
  </div>

  
  <div className='js'>
    <label>JavaScript

    <span>Frontend</span>
    </label>
    <progress value="90" max="100">90%</progress>
  </div>


   
  <div className='react'>
    <label>React.js

    <span>Frontend</span>
    </label>
    <progress value="90" max="100">90%</progress>
  </div>


   <div className='node'>
    <label>Node.js

    <span>Backend</span>
    </label>
    <progress value="87" max="100">87%</progress>
  </div>


   <div className='express'>
    <label>Express.js

    <span>Backend</span>
    </label>
    <progress value="87" max="100">87%</progress>
  </div>



   <div className='sql'>
    <label>MySQL

    <span>Database</span>
    </label>
    <progress value="85" max="100">85%</progress>
  </div>


   <div className='git'>
    <label>Git & Github

    <span>Tools</span>
    </label>
    <progress value="90" max="100">90%</progress>
  </div>










   </div>
   </>
  )
}

export default Skills
