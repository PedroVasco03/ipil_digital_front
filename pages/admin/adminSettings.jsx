import Image from "next/image"
import Head from "next/head"
import empty from '../../public/images/images-system/empty.png'
import { Button, Card, CardBody, CardFooter, Label } from "reactstrap"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import NavBarSecretaria from "./navbar"
import SideBarSecretaria from "./sidebar"
import { useEffect, useState } from "react"
import axios from 'axios'
function AdminSettings(){
    const [id, setId] = useState('')
    const [admin, setAdmin] = useState('')
    const [senha, setSenha] = useState('')
    
    useEffect(()=>{
        getData()
    }, [])
    const getData = ()=>{
        const data = JSON.parse(localStorage.getItem('data-user'))
        console.log(data)
        setId(data.id[0])
        setAdmin(data.nome[0])
        setSenha(data.senha[0])
    }
    return (
        <div>
            <Head>
                <title>Admin | Settings</title>
            </Head>
            <NavBarSecretaria></NavBarSecretaria>
            <div className={styleGeral.container}>
                <SideBarSecretaria/>
                <div className={styleGeral.content}>            
                    <div className="d-flex flex-column align-items-center w-100">
                        <Card className="w-75 m-5">
                            <CardBody>
                                <h2 className="text-center">Dados do admin</h2>
                                <Label>ID: {id}</Label> 
                                <br/>
                                <Label>Administrador: {admin} </Label>   
                                <br/>
                                <Label>Senha: {senha}</Label>
                            </CardBody>
                            <CardFooter >
                                <Button color="primary" className="m-2">Editar</Button>
                                <Button color="danger" className="m-2">Eliminar</Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminSettings