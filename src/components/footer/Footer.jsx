import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Bossa</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="#" className="footer__social-icon" target='_blank'><i class="bx bxl-facebook"></i></a>
            <a href="#" className="footer__social-icon" target='_blank'><i class="bx bxl-instagram"></i></a>
            <a href="#" className="footer__social-icon" target='_blank'><i class="bx bxl-twitter"></i></a>
            </div>

            <span className="footer__copy">&#169; JBxss. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer