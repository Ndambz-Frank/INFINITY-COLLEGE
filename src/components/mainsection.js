import React from "react";

import "./ourcomponents.css"

const Section = () => {
    return(
        <div className="main-page">
        <header>
          <h1>WELCOME TO INFINITY COLLEGE</h1>
          <p><i>YOUR PATHWAY, TO SUCCESS</i></p>
        </header>
  
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies, elit nec rhoncus blandit, arcu sapien dignissim purus.
            Donec aliquet ligula sit amet ipsum tristique interdum.
          </p>
        </section>
  
        <section>
          <h2>Academic Programs</h2>
          <ul>
            <li>Bachelor's Degrees</li>
            <li>Master's Degrees</li>
            <li>Ph.D. Programs</li>
          </ul>
        </section>
  
        <section>
          <h2>Admissions</h2>
          <p>
            Ready to start your academic journey with us? Explore our admission
            process and requirements.
          </p>
          <a href="/admissions">Learn More</a>
        </section>
  
        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to contact us.</p>
          <a href="/contact">Contact</a>
        </section>
      </div>
    )
}

export default Section;