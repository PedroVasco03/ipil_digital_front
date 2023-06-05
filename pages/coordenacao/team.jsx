import NavBarCoordenacao from "./navbar"
import Head from "next/head"
import styleGeral from '../css/logado.module.css'
import SideBarCoordenacao from "./sidebar"
import { Button } from "reactstrap";
import ModalCreate from "./components/modalCreate";
import { useState } from "react";
function TeamCoordenacao(){
    const [modal, setModal] = useState(false)
    const toggleModal = ()=> setModal(!modal)
    const modalClose = ()=> setModal(false)
    const [ data, setData ] = useState({})
    const getData = ()=>{
        const value = JSON.parse(localStorage.getItem('coordenadorData'))
    }

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
            <title>COORDENACAO | Pessoal</title>
            <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
        </Head>
        <NavBarCoordenacao/>
        <div className={styleGeral.container}>
            <SideBarCoordenacao/>
            <div className={styleGeral.content}>
                    <div style={{float:'right'}} className="m-4">
                        <Button onClick={toggleModal}>Criar Coordenação</Button>

                    </div>
                    <ModalCreate show={modal} closed={modalClose}></ModalCreate>
            </div>
        </div>


    </div>;
}
export default TeamCoordenacao