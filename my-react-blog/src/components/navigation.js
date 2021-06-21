import React from 'react'
import {Link} from 'react-router-dom'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About', 
        path: '/about'
    },
    {
        title: 'Projects',
        path: '/projects'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

export default function Navigation () {
    return (
    <nav className="site-navigation">
        <span><Link to='/'>Yiwei Li</Link></span>

        <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
    </nav>)
}