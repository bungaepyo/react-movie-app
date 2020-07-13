import React from 'react';
import './About.css'

function About(props){
    console.log(props);
    return (
        <div className="about_container">
            <span>
                Hi -
            </span>
            <span>
                George Orwell
            </span>
        </div>
    );
}

export default About;