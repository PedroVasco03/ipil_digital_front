import axios from "axios"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { useEffect } from "react"
import { Button, Card, CardBody, Label } from "reactstrap"
import styleGeral from '../css/logado.module.css'
import NavBarAluno from "./navbar"
import SideBarAluno from "./sidebar"

function Settings(){
    useEffect(()=>{
        getAluno()
    }, [])
    const [aluno, setAluno] = useState([])
    const getAluno = async ()=>{
        const data = await JSON.parse(localStorage.getItem('alunoData'))
        setAluno(data)
        console.log(data)
    }
    const deleteAluno = async ()=>{
        const data = await JSON.parse(localStorage.getItem('alunoData'))
        await axios.delete(`http://localhost:5000/aluno/${data.id}`)
        await axios.get('http://localhost:5000/reclamacao')
        .then((response)=>{
            const filtrar = response.data.filter((dado)=> dado.idaluno === data.id)
            filtrar.map( async(item)=>{
                await axios.delete(`http://localhost:5000/reclamacao/${item.id}`)
            })
        })
        
    }

    return (
        <div>
            <Head>
                <title>ALUNO | Definicoes</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarAluno/>
            <div className={styleGeral.container}>
                <SideBarAluno/>
                <div className={styleGeral.content}>
                   <Card className="m-2">
                        <CardBody>
                            <h2>Dados Pessoais</h2>
                            <Label>Nome: {aluno.nome}</Label>
                            <br />
                            <Label>Número de processo: {aluno.numeroprocesso}</Label>
                            <br />
                            <Label>Classe: {aluno.classe} ª</Label>
                            <br />
                            <Label>Turma: {aluno.turma}</Label>
                            <br />
                            <Label>Senha: {aluno.senha}</Label>
                            <br />
                            <Label>Área de formação: {aluno.area}</Label>
                            <br />
                            <Label>Curso: {aluno.curso}</Label>
                            <br />
                            <Label>BI: {aluno.bi}</Label>
                            <br />
                            <Label>Email: {aluno.email}</Label>
                            <br /> 
                            <Label>Telefone: {aluno.telefone}</Label>
                            <br />
                            <Label>Sexo: {aluno.sexo}</Label>
                            <br />
                            <div className="d-flex">
                                <Link href={'/login/aluno/login/home'}>
                                        <Button color="danger" className="m-2" onClick={()=>{
                                            deleteAluno()
                                            localStorage.removeItem("alunoData")
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
export default Settings