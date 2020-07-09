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
      <div class="container">
          <Gallery  images={CV}/>
        <div class="row align-items-center my-5">


          <div class="col-lg-9
          ml-5">

            <h1 class="font-weight-light">CV</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
