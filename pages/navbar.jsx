import style from './css/navbar.module.css'
import logo from '../public/images/logotipo.png'
import Link from 'next/link'
import { CloseButton, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import Image from 'next/image'
import { useState } from 'react'
function NavBar(){
    const [open, setOpen] = useState(false)
    const setOpenned = ()=>{
        setOpen(true)
    }
    const closed = ()=>{
        setOpen(false)
    }
    return(
        <Navbar className='d-flex flex-nowrap' color='light' dark={true} expand='lg'  fixed='top'>
            <NavbarBrand id={style.brand} className='px-5' href=''>
                <Image src={logo} alt='logotipo' width={40}/>
               <span id={style.logo}>IPIL<b>DIGITAL</b></span>
            </NavbarBrand>
            <Nav className={style.nav} id={style.collapse}>
                <div className={style.flexible}>
                    <NavItem><NavLink className={style.textBlank}>Home</NavLink></NavItem>
                    <NavItem><NavLink className={style.textBlank}>O que é o IPILDIGITAL</NavLink></NavItem>
                    <NavItem><NavLink className={style.textBlank}>Serviços</NavLink></NavItem>
                    <NavItem><NavLink className={style.textBlank} href={'/components/Main'}>Entrar</NavLink></NavItem>
                </div>
                <NavbarToggler onClick={setOpenned} className={style.toogle}/>
                <Offcanvas id={style.offcanvasNavbar} isOpen={open} direction={'end'} backdrop={false}>
                    <OffcanvasHeader>
                        <CloseButton onClick={closed} variant='white'/>

                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <Nav className='d-flex flex-column'>
                            <NavItem><NavLink className={style.textBlank}>Home</NavLink></NavItem>
                            <NavItem><NavLink className={style.textBlank}>O que é o IPILDIGITAL</NavLink></NavItem>
                            <NavItem><NavLink className={style.textBlank}>Serviços</NavLink></NavItem>
                            <NavItem><NavLink className={style.textBlank} href={'/components/Main'}>Entrar</NavLink></NavItem>   
                        </Nav> 
                    </OffcanvasBody>
                </Offcanvas>
            </Nav>
        </Navbar>
    )
}
export default NavBar