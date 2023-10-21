import React from 'react'
import './header.css'

export default function Header() {
    return (

        <header className='header'>
            <div className='logo-box'>
                <h2>LogoType</h2>
            </div>
            <div className='link-box'>
                <a href='#'>Link1</a>
                <a href='#'>Link2</a>
                <a href='#'>Link3</a>
                <a href='#'>Link4</a>
                <a href='#'>example@website.com</a>
                <a href='#'>EN</a>
            </div>
        </header>

    )
}
