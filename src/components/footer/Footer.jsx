import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
            <div className="bd-copyright-area-seven gray-bg">
                <div className="bd-custom-container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 order-3 order-lg-1">
                            <div className="bd-copyright-six pb-10 text-center text-lg-start">
                                <p className="m-0">© 2023 All rights reserved | Design &amp; Develop by <a href="https://fabriziobertolo.vercel.app/">@pastelDevChoclito</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="bd-footer-widget-six-social pb-10 text-center">
                                <a href="https://github.com/Fabrizionb" target="_blank"><i className="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/fabrizio-bertolo/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="mailto:fabrizio1007@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 order-2 order-lg-3">
                            <div className="bd-copyright-six pb-10 text-lg-end text-center">
                                <ul>
                                    <li><a href="contact.html">Privacy</a></li>
                                    <li><a href="contact.html">Terms</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer