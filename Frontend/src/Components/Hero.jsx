
import React from 'react';
import "./Hero.css";
import Projects from './Projects';
import { useNavigate } from 'react-router-dom';
import myimage from './somil.jpg.jpeg'

function Hero() {

    const navigate = useNavigate()
    return (
        <div className="hero-container">

            <div className="hero-content">

                <h5 className="available">
                    <span></span>
                    Available for Opportunities
                </h5>

                <h1 className="hello">HELLO, I'M</h1>

                <h1 className="namee">
                    SOMIL <span>GUPTA.</span>
                </h1>

                <h1 className="role">
                    Full Stack <span>Developer</span>
                </h1>

                <p className="para">
                    I build modern, responsive and scalable
                    web applications using React, Node.js,
                    Express and MySQL. Turning ideas into
                    digital reality.
                </p>

                <div className="hero-buttons">
                    <button className="work" onClick={()=>{navigate("/project")}}>
                        Explore My Work ↗
                    </button>

                    <button className="connect" onClick={()=>{navigate('/contact')}}>
                        Let's Connect
                    </button>
                </div>

                <div className="socials">
                    <a href="https://github.com/som-il">GitHub</a>
                    <a href="https://linkedin.com/">LinkedIn</a>
                    <a href="https://www.instagram.com/developer__somil/">Instagram</a>
                </div>

            </div>

            <div className="hero-image">
                <img
                    src={myimage}
                    className="img"
                    alt="Developer workspace"
                />
            </div>

        </div>
    );
}

export default Hero;
