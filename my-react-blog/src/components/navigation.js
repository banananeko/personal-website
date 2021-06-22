import React,  {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'

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
    return (
    <nav className="site-navigation" role="navigation">
        
        <span className="menu-title">
            <span>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38}/><Link to='/'>Yiwei Li</Link>
            </span>
        </span>
        <div className={`menu-content-container ${menuActive && 'active'}`}>
            <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <i className="icon ionicons ion-ios-menu" onClick={(ev) => setMenuActive(!menuActive)} />
    </nav>)
}