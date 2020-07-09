import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-1">

          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light mb-5">Contact</h1>
            <h1  style={{marginLeft:'5%'}}><a href="mailto: moetichentuf@hotmail.com"> <span className="glyphicon">&#x2709;</span>
            </a></h1>
            <h1><a href="https://github.com/moetichentuf" className="fa fa-github"></a></h1>
            <h1><a href="https://www.linkedin.com/in/moeti-chentuf-1bb088198/" className="fa fa-linkedin"></a></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
