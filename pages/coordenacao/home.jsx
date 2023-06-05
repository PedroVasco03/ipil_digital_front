import Image from "next/image"
import NavBarCoordenacao from "./navbar"
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import ModalComponent from "./components/modal"
import Head from "next/head"
import styleGeral from '../css/logado.module.css'
import styleSide from'../css/sideBar.module.css'
import SideBarCoordenacao from "./sidebar"
import Condition from "./condition"

function HomeCoordenacao(){
    const [datas, setDatas] = useState([])
    const [modal, setModal] = useState(false)
    const toggleModal = ()=> setModal(!modal)
    const modalClose = ()=> setModal(false)
    const [modal2, setModal2] = useState(false)
    const toggleModal2 = ()=> setModal2(!modal2)
    const modalClose2 = ()=> setModal2(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = ()=> setDropdownOpen((prevState)=>!prevState)
    const [data, setData] = useState({})
    const getData = ()=>{
        const value = JSON.parse(localStorage.getItem('coordenadorData'))
        setData(value)
    }
    useEffect(()=>{
       getData()
    },[])
    
    return data == null ? <div>
    <Head>
            <title>Não encontrado</title>
            <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
        </Head>
        <div className="d-flex justify-content-center p-4">
            <p className="display-4 m-4">Usuário não está logado!</p>
        </div>
    </div> : <div>
        <Head>
            <title>COORDENACAO | Inicio</title>
            <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
        </Head>    
        <NavBarCoordenacao></NavBarCoordenacao>
        <div className={styleGeral.container}>
            <SideBarCoordenacao></SideBarCoordenacao>
            <div className={styleGeral.content}>          
                    <div >
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle className={styleSide.btn}>Horário de Atendimento</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={toggleModal}>Criar Horário</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                       <ModalComponent show={modal} closed={modalClose}/>
                    </div>
                    <Condition></Condition>  
                   
                     
                </div>
            </div>
        </div>;
}
export default HomeCoordenacao

