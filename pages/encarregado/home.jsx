import Image from "next/image"
import { useState } from "react"
import empty from '../../public/images/images-system/empty.png'
import Head from "next/head"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import NavBarAluno from "./navbar"
import SideBarAluno from "./sidebar"


function HomeEncarregado({users}){
    const [modal, setModal] = useState(false)
    const toggleModal = ()=> setModal(!modal)
    const modalClose = ()=> setModal(false)
    const [modal2, setModal2] = useState(false)
    const toggleModal2 = ()=> setModal2(!modal2)
    const modalClose2 = ()=> setModal2(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = ()=> setDropdownOpen((prevState)=>!prevState)
    return (
        <div>
            <Head>
                <title>ENCARREGADO | Inicio</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarAluno></NavBarAluno>
            <div className={styleGeral.container}>
                <SideBarAluno/>
                <div className={styleGeral.content}>            
                    <div className="d-flex flex-column align-items-center w-100">
                        <Image  className={styleSide.home_img} src={empty} />
                        <p>Nenhuma actividade.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default HomeEncarregado

