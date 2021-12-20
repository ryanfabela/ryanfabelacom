import React, { Component } from 'react';
import {faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slides from '../Assets/Images/slide-22.jpg';

class Banner extends Component {
    render() {
        return (
          <section id="home" className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
              <div className="slide">
                <div className="slider-image">
                  <img src={Slides} />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col col-md-8 col-sm-12 slide-caption">
                      <div className="slide-subtitle">
                        <h4>I Am Ryan Fabela</h4>
                      </div>
                      <div className="slide-title">
                        <h2>App and Website Developer</h2>
                      </div>
                      <div className="btns">
                        <a
                          href="#contact"
                          className="theme-btn go-contact-area"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy">
              <p>Director of Application Development and Lead Engineer</p>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a target="_blank" href="https://github.com/ryanfabela">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/ryancfabela">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ryanc.fabela/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        );
    }
}

export default Banner;