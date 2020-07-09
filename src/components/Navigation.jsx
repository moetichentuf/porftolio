import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-light  bg-faded">
        <div class="container">
          <Link style={{fontFamily: 'Catamaran', fontSize:'22px', color:'black', textShadow:'1px 1px  #ffb701'}} class="navbar-brand" to="/">
            Moeti Chentuf.
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div    class="collapse navbar-collapse" id="navbarResponsive">
            <ul  class="navbar-nav ml-auto  ">
              <li
                class={`nav-item  ${ 
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link style={{fontFamily: 'Catamaran'}} class="nav-link " to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li
                  className={`nav-item  ${
                      props.location.pathname === "/portfolio" ? "active" : ""
                  }`}
              >
                <Link style={{fontFamily: 'Catamaran'}} class="nav-link " to="/portfolio">
                  Portfolio
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link style={{fontFamily: 'Catamaran'}} class="nav-link " to="/about">
                  Cv
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link style={{fontFamily: 'Catamaran'}} class="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
