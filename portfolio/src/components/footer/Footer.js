import React from 'react'
import styles from './footer.css'

export default function Footer() {
    return (
        <footer className="footer" id='footer'>
            <p>Developed by <strong>Rob Allen</strong>.</p>
            <div className="social-container">
              <a className="social" href="https://github.com/robertjallen" target="_blank">github</a> 
              <a className="social" href="https://www.linkedin.com/in/robertallendev/" target="_blank">linkedIn</a>
              <a className="social" href="mailto: bobbidigi34@gmail.com" target="_blank">Email</a>
              <a className="social" href="tel:15868012860">Phone</a>
            </div>            
        </footer>
    )
}