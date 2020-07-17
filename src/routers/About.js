import React from 'react';
import './About.css'

function About(props){
    console.log(props);
    return (
        <div className="about_container">
            <h2 id="about_greet">
                This is a Top 20 Movie Chart at: https://yts.mx/
            </h2>
            <span>
                Developer profile: https://github.com/bungaepyo
            </span>
        </div>
    );
}

export default About;