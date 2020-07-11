import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-1">

          </div>
          <div class="col-lg-8">
            <h1 class="font-weight-light mb-5">Contact</h1>
            <h1  style={{}}><a href="mailto: moetichentuf@hotmail.com"><i
                className="fa fa-envelope-o" aria-hidden="true"></i><span style={{fontSize:'2vw', marginLeft:'5%'}}>moetichentuf@hotmail.com</span>
            </a></h1>
            <h1  style={{}}><a href="https://github.com/moetichentuf"><i
                className="fa fa-github" aria-hidden="true"></i><span style={{fontSize:'2vw', marginLeft:'5%'}}>https://github.com/moetichentuf</span>
            </a></h1>
            <h1  style={{}}><a href="https://www.linkedin.com/in/moeti-chentuf-1bb088198/"><i
                className="fa fa-linkedin" aria-hidden="true"></i><span style={{fontSize:'2vw', marginLeft:'5%'}}>linkedin.com/in/moeti-chentuf-1bb088198/</span>
            </a></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
