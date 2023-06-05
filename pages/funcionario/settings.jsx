import axios from "axios"
import Head from "next/head"
import { useState } from "react"
import { useEffect } from "react"
import { Button, Card, CardBody, Label } from "reactstrap"
import styleGeral from '../css/logado.module.css'
import NavBarAluno from "./navbar"
import SideBarAluno from "./sidebar"

function SettingsEncarregado(){
    useEffect(()=>{
        getEncarregado()
    }, [])
    const [encarregado, setEncarregado] = useState([])
    const getEncarregado= async ()=>{
        const data =  JSON.parse(localStorage.getItem('funcionarioData'))
        setEncarregado(data)
        console.log(data)
        
    
    }
    const deleteAluno = async ()=>{
        const data = await JSON.parse(localStorage.getItem('funcionarioData'))
        await axios.delete(`http://localhost:5000/funcionario/${data.id}`)
    }

    return (
        <div>
            <Head>
                <title>Funcionario | Definicoes</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarAluno/>
            <div className={styleGeral.container}>
                <SideBarAluno/>
                <div className={styleGeral.content}>
                   <Card className="m-2">
                        <CardBody>
                            <h2>Dados Pessoais</h2>
                            <Label>Nome: {encarregado.nome}</Label>
                            <br />
                            <Label>Senha: {encarregado.senha}</Label>
                            <br />
                            <Label>BI: {encarregado.bi}</Label>
                            <br />
                            <Label>Email: {encarregado.email}</Label>
                            <br /> 
                            <Label>Telefone: {encarregado.telefone}</Label>
                            <br />
                            <Label>Sexo: {encarregado.sexo}</Label>
                            <br />
                            <div className="d-flex">
                                <Link href={'/login/funcionario/login'}>
                                    <Button color="danger" className="m-2" onClick={()=>{
                                        deleteAluno()
                                        localStorage.removeItem("funcionarioData")
                                    }}>Eliminar conta</Button>
                                </Link>
                                <Button color="primary" className="m-2">Editar dados</Button>
                            </div>  
                        </CardBody>
                        
                   </Card>
                </div>
            </div>
        </div>
    );
}
export default SettingsEncarregado