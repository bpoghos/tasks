import React from 'react'
import Header from '../Header'
import Main from '../Main'
import './app.css'
import Information from '../Information'
import Footer from '../Footer'

export default function App() {



    interface Data {
        id: number;
        image: string;
        title: string;
        description: string;
        date: string;
    }

    const data: Data[] = [
        {
            id: 1,
            image: 'image1.jpg',
            title: 'Title 1',
            description: 'Description 1',
            date: '2023-10-22',
        },
        {
            id: 2,
            image: 'image2.jpg',
            title: 'Title 2',
            description: 'Description 2',
            date: '2023-10-23',
        },
        {
            id: 3,
            image: 'image3.jpg',
            title: 'Title 3',
            description: 'Description 3',
            date: '2023-10-24',
        },
    ]


    return (
        <div className='app'>
            <Header />
            <Main />
            <Information />
            <Footer />
        </div>
    )
}




