import React from 'react'
import './card.css'

export default function Card() {
    return (
        <div className='card'>
            <div className='image-container'>
                <img className='image' src='' alt='' />
            </div>
            <div className='body'>
                <h3 className='title'>TITLE</h3>
                <p className='description'>description</p>
                <span className='date'>22.10.2023</span>
            </div>

        </div>
    )
}
