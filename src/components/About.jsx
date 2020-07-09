import React from "react";
import moeti from "./images/MoetiCV.jpg"
import Gallery from 'react-grid-gallery';

function About() {
  const CV =
      [{
        src: moeti,
        thumbnail: moeti,
        thumbnailWidth: 100,
        thumbnailHeight: 'auto',

      }]
  return (

    <div className="about">
        <div style={{marginLeft:'20%'}}><Gallery  images={CV}/></div>
      <div class="container">

        <div class="row align-items-center my-5">


          <div class="col-lg-9
          ml-5">

            <h1 class="font-weight-light">CV</h1>
            <p>
                "If you want the best talent, stop looking for perfection. It does not exist! Resumes don’t perform jobs. it’s people – so hire people and not resumes." 😄
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
