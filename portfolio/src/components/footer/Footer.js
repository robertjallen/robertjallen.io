import React from 'react'
import styles from './footer.css'
import coffee from '../../images/coffee.jpg'

export default function Footer() {
    return (
        <footer className="footer" id='footer'>
            <p>Developed by <strong>Rob Allen</strong>.</p>
            <div className="social-container">
              <a className="social" href="https://github.com/robertjallen" target="_blank">Github</a> 
              <a className="social" href="https://www.linkedin.com/in/robertallendev/" target="_blank">LinkedIn</a>
              <a className="social" href="mailto: bobbidigi34@gmail.com" target="_blank">Email</a>
              <a className="social" href="tel:15868012860">Phone</a>
            </div>
            {/* <div className="footer-lower">
                {/* <img src={coffee} /> */}
                {/* <p>buy me a coffee</p> */}
                {/* <p>3Lv7gipDXFzSjrWoisG3A82YKSGJGxW57y</p> */}
            {/* </div>              */}
        </footer>
    )
}