import styleNav from '../css/navLogado.module.css'
import logo from '../../public/images/logotipo.png'
import Image from 'next/image'
import { useState } from 'react'
function NavBarAluno(){ 
    const [open, setOpen] = useState(false)
    const setOpenned = ()=>{
        setOpen(true)
    }
    const closed = ()=>{
        setOpen(false)
    }
    return(
        <nav className={styleNav.nav}>
                    <li className={styleNav.li}>
                        <a href="#" className={styleNav.a+" "+styleNav.logo}> 
                            <Image className={styleNav.i} src={logo} alt='logo'/>
                            <span className={styleNav.nav_item+" "+styleNav.span}>IPIL<span className={styleNav.digital}> DIGITAL</span> </span>
                        </a>
                    </li>
        </nav>
    )
}
export default NavBarAluno