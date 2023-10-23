import React from 'react'
import './information.css'
import Cards from '../Cards'

export default function Information() {
    return (
        <div className='information'>
            <div className='first-info-cards'>
                <Cards />
            </div>
            <div className='second-info-cards'>
                <Cards />
            </div>
        </div>
    )
}
