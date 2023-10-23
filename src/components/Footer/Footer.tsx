import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                &copy; 2023
                <div className='footer-links'>
                    <a href="#">Home</a>
                    <a href="#">Product</a>
                    <a href="#">About</a>
                </div>
            </div>
        </footer>
    )
}
