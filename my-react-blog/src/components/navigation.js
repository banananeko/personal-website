import React, { useState, useRef }  from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'
import { useOnClickOutside } from './hook';

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
    const [menuActive, setMenuActive] = useState(false)
    const node = useRef(); 
    useOnClickOutside(node, () => setMenuActive(false));

    return (
    <nav className="site-navigation" role="navigation">
        
        <span className="menu-title">
            <span>
                {/* <img src="../assets/images/橘猫头像Banananeko.jpg" size={38}/> */}
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VokmrwrMO7pnA3j1R0llY1PWdD9Y9hAO6A&usqp=CAU" size={38} /><Link to='/'>Yiwei Li</Link>
            </span>
        </span>
        <div ref={node} className={`menu-content-container ${menuActive && 'active'}`}>
            <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className={`iconWrapper ${menuActive && 'active'}`}>
          <div className="hamburger " onClick={(ev) => setMenuActive(!menuActive)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
    </nav>)
}