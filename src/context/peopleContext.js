import * as React from 'react'

const people =  [
    {
        id: 1,
        name: 'Joseph Ike', 
        location: 'Ikeja',
        role: 'CUSTOMER', 
        image: 'assets/ellipse-22.png'
    },
    {
        id: 2,
        name: 'Adetola Fashina', 
        location: 'Ibadan',
        role: 'CUSTOMER', 
        image: 'assets/ellipse-23.png'
    },
    {
        id: 3,
        name: 'Emmanuel Fayemi', 
        location: 'Akoka',
        role: 'CUSTOMER', 
        image: 'assets/ellipse-24.png'
    },
    {
        id: 4,
        name: 'Chisom Obilor', 
        location: 'Magodo',
        role: 'VENDOR', 
        image: 'assets/ellipse-22-(1).png'
    },
    {
        id: 5,
        name: 'Adunoluwa Adeyemi', 
        location: 'Iwo Road',
        role: 'VENDOR', 
        image: 'assets/ellipse-23-(1).png'
    },
    {
        id: 6,
        name: 'Chidi Okeke', 
        location: 'Somolu',
        role: 'VENDOR', 
        image: 'assets/ellipse-24-(1).png'
    },
    {
        id: 7,
        name: 'Temi Obadofin', 
        location: '',
        role: 'VENDOR', 
        image: 'assets/ellipse-25.png'
    },
    {
        id: 8,
        name: 'Promise Ejiofor', 
        location: '',
        role: 'VENDOR', 
        image: 'assets/ellipse-26.png'
    },
    {
        id: 9,
        name: 'Feyisola Arinola', 
        location: '',
        role: 'VENDOR', 
        image: 'assets/ellipse-27.png'
    },
    {
        id: 10,
        name: 'Karen Ibeh', 
        location: '',
        role: 'VENDOR', 
        image: 'assets/ellipse-28.png'
    },
    {
        id: 11,
        name: 'Oluchi Uzo', 
        location: '',
        role: 'VENDOR', 
        image: 'assets/ellipse-29.png'
    },
    {
        id: 12,
        name: 'Amos Okafor', 
        location: '',
        role: 'VENDOR', 
        image: 'assets/Ellipse-30.png'
    }
]

export const peopleContext = React.createContext(people);