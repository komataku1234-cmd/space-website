import { Link, NavLink } from 'react-router-dom';
import logo from './assets/shared/logo.svg'
import { useState } from 'react';
import hamburger from './assets/shared/icon-hamburger.svg'
import closeIcon from './assets/shared/icon-close.svg'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="absolute top-0 inset-x-0 p-5 md:p-5 lg:p-16 lg:flex lg:items-center">
            <Link to="/" aria-label="Home">
                <img src={logo} alt="" />
            </Link>

            <div className="hidden lg:block lg:flex-1 lg:border-t lg:border-white/25 lg:mx-8" />

            <div className="text-white fixed top-0 lg:top-10 right-0 bottom-9/10 lg:bottom-4/5 left-1/3 lg:left-1/2 backdrop-blur-lg bg-white/5 hidden md:flex items-center justify-evenly text-2xl">
                <NavLink to="/" className={({ isActive }) =>  `hover:border-b-2 ${isActive ? 'border-b-2' : ''}`}>Home</NavLink>
                <NavLink to="/destination" className={({ isActive }) =>  `hover:border-b-2 ${isActive ? 'border-b-2' : ''}`}>Destination</NavLink>
                <NavLink to="/crew" className={({ isActive }) =>  `hover:border-b-2 ${isActive ? 'border-b-2' : ''}`}>Crew</NavLink>
                <NavLink to="/technology" className={({ isActive }) =>  `hover:border-b-2 ${isActive ? 'border-b-2' : ''}`}>Technology</NavLink>
            </div>

            <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-label="メニューを開く"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden absolute top-5 right-5 z-10"
                >
                <img src={isMenuOpen ? closeIcon : hamburger} alt="" />
             </button>
            <div className={isMenuOpen ? 'fixed inset-0' : 'hidden'} onClick={() => setIsMenuOpen(false)}>
                <div className={isMenuOpen ? 'fixed top-0 right-0 bottom-0 left-1/3 backdrop-blur-lg' : 'hidden'}>
                    <ul className="absolute top-1/5 inset-x-10 flex flex-col text-white text-2xl gap-6 ">
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `block hover:border-r-2${isActive ? 'block border-r-2' : ''}`}>Home</NavLink></li>
                        <li><NavLink to="/destination" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `block hover:border-r-2${isActive ? 'block border-r-2' : ''}`}>Destination</NavLink></li>
                        <li><NavLink to="/crew" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `block hover:border-r-2${isActive ? 'block border-r-2' : ''}`}>Crew</NavLink></li>
                        <li><NavLink to="/technology" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `block hover:border-r-2${isActive ? 'block border-r-2' : ''}`}>Technology</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}