import Image from "next/image"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { useState } from "react"
import ModalComponent from '../coordenacao/components/modal'
import Head from "next/head"
import empty from '../../public/images/images-system/empty.png'
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import NavBarSecretaria from './navbar'
import SideBarSecretaria from './sidebar'

function HomeSecretaria({users}){
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
                <title>SECRETARIA | Inicio</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head> 
            <NavBarSecretaria></NavBarSecretaria>
            <div className={styleGeral.container}>
                <SideBarSecretaria></SideBarSecretaria>
                <div className={styleGeral.content}>          
                        <div >
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle className={styleSide.btn}>Horário de Atendimento</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={toggleModal}>Criar Horário</DropdownItem>
                                    <DropdownItem onClick={toggleModal2}>Editar Horário</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                           <ModalComponent show={modal} closed={modalClose}/>
                           <ModalNoSchedule show={modal2} closed={modalClose2}/>
                        </div>    
                        <div className="d-flex flex-column align-items-center w-100">
                            <Image  className={styleSide.home_img} src={empty} />
                            <p>Nenhuma actividade.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default HomeSecretaria