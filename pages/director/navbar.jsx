import logo from '../../public/images/logotipo.png'
import styleNav from '../css/navLogado.module.css'
import { Button, CloseButton, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import Image from 'next/image'
import { useState } from 'react'
function NavBarCoordenacao(){
    return(
        <nav className={styleNav.nav}>
            <li className={styleNav.li}><a href="/coordenacao/homecoordenacao" className={styleNav.a+" "+styleNav.logo}> 
                <Image className={styleNav.i} src={logo} alt='logo'/>
                <span className={styleNav.nav_item+" "+styleNav.span}>IPIL<span className={styleNav.digital}> DIGITAL</span> </span>
            </a></li>
        </nav>
    )
}
export default NavBarCoordenacao