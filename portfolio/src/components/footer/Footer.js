import React from 'react'
import styles from './footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <p>Developed by <strong>Rob Allen</strong>.</p>
            <div className="social-container">
              <a className="social" href="https://github.com/robertjallen" target="_blank">github</a><br/> 
              <a className="social" href="https://www.linkedin.com/in/robertallendev/" target="_blank">linkedIn</a>
            </div>            
        </footer>
    )
}