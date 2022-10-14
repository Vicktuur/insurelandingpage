import '../App.css'
import bgpatternmobilenav from '../images/bgpatternmobilenav.svg'
import {useState, useEffect} from "react";

export default function Menu () {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    const [screenWidth, setScreenWidth] = useState(window.onload)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        } 
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    },[])

    const hamburgeropen = <div className='hamburger' onClick={toggleNav}>
    <span className='bar'></span>
    <span className='bar'></span>
    <span className='bar'></span>
    </div>

    const hamburgerclose = <div className='hamburgerclose' onClick={toggleNav}>
    <span className='x'></span>
    <span className='x'></span>
    <span className='x'></span>
    </div>

    
    const closeMobileMenu = () => setToggleMenu(false)

    return (
      <nav>
        {toggleMenu ? hamburgerclose : hamburgeropen}
        {(toggleMenu || screenWidth > 800) && (
            <div className='navigation'>
            <a href='#' className='nav-link' onClick={closeMobileMenu}>HOW WE WORK</a>
            <a href='#' className='nav-link' onClick={closeMobileMenu}>BLOG</a>
            <a href='#' className='nav-link' onClick={closeMobileMenu}>ACCOUNT</a>
            <a href='#' className='nav-link' id='view' onClick={closeMobileMenu}>VIEW PLANS</a>
            <img src={bgpatternmobilenav} alt='' style={{width: '100%'}}/>
          </div>
        )}
      </nav>
    )
}