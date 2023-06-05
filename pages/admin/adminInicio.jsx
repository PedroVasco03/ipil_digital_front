import Image from "next/image"
import Head from "next/head"
import empty from '../../public/images/images-system/empty.png'
import { Button, Table } from "reactstrap"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import NavBarSecretaria from "./navbar"
import SideBarSecretaria from "./sidebar"
import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"

function AdminInicio(){
    const [aluno, setAluno] = useState([])
    const [coordenador, setCoordenador] = useState([])
    const [director, setDirector] = useState([])
    const [encarregado, setEncarregado] = useState([])
    const [funcionario, setFuncionario] = useState([])
    useEffect(()=>{
        getAluno()
        getCoordenador()
        getDirector()
        getEncarregado()
        getFuncionario()
    },[])
    const getAluno = async ()=>{
        await axios.get('http://localhost:5000/aluno')
        .then((response)=>{
            setAluno(response.data)
        })
    }
    const getCoordenador = async ()=>{
        await axios.get('http://localhost:5000/coordenador')
        .then((response)=>{
            setCoordenador(response.data)
        })
    }
    const getDirector = async ()=>{
        await axios.get('http://localhost:5000/director')
        .then((response)=>{
            setDirector(response.data)
        })
    }
    const getEncarregado = async ()=>{
        await axios.get('http://localhost:5000/encarregado')
        .then((response)=>{
            setEncarregado(response.data)
        })
    }
    const getFuncionario = async ()=>{
        await axios.get('http://localhost:5000/funcionario')
        .then((response)=>{
            setFuncionario(response.data)
        })
    }
    const update = async (permissao, id,route)=>{
        await axios.patch(`http://localhost:5000/${route}/${id}`,{
            permissao: permissao
        })
        if(route==='aluno'){
            getAluno()
        }
        else if(route==='coordenador'){
            getCoordenador()
        }
        else if(route === 'director'){
            getDirector()
        }
        else if(route === 'encarregado'){
            getEncarregado()
        }
        else if(route === 'funcionario'){
            getFuncionario()
        }
    }
    const deletar = async(id, route)=>{
        await axios.delete(`http://localhost:5000/${route}/${id}`)
        if(route==='aluno'){
            getAluno()
        }
        else if(route==='coordenador'){
            getCoordenador()
        }
        else if(route === 'director'){
            getDirector()
        }
        else if(route === 'encarregado'){
            getEncarregado()
        }
        else if(route === 'funcionario'){
            getFuncionario()
        }
    }
    return (
        <div>
            <Head>
                <title>Admin | Inicio</title>
            </Head>
            <NavBarSecretaria></NavBarSecretaria>
            <div className={styleGeral.container}>
                <SideBarSecretaria/>
                <div className={styleGeral.content}>            
                    <div className="d-flex flex-column align-items-center w-100">
                        <h2 className="my-4">Aluno</h2>
                       <Table>
                            <thead>
                                    <tr>
                                            <td>Id</td>
                                            <td>Nome</td>
                                            <td>BI</td>
                                            <td>Área de formação</td>
                                            <td>Curso</td>
                                            <td>Turma</td>
                                            <td>Classe</td>
                                            <td>Numero de Processo</td>
                                            <td>Telefone</td>
                                            <td>Email</td>
                                            <td>Sexo</td>
                                            <td>Senha</td>
                                            <td>Permissão</td>
                                        </tr>
                                </thead>
                                <tbody>
                                    {aluno.map((data)=>{
                                        return(
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.nome}</td>
                                                <td>{data.bi}</td>
                                                <td>{data.area}</td>
                                                <td>{data.curso}</td>
                                                <td>{data.turma}</td>
                                                <td>{data.classe}</td>
                                                <td>{data.numeroprocesso}</td>
                                                <td>{data.telefone}</td>
                                                <td>{data.email}</td>
                                                <td>{data.sexo}</td>
                                                <td>{data.senha}</td>
                                                <td>
                                                    <Button className="m-1" color="danger" onClick={()=>{
                                                        deletar(data.id, 'aluno')
                                                        
                                                    }}>Eliminar</Button>
                                                    <Button className="m-1" onClick={()=>{
                                                        update('Permitir', data.id, 'aluno')
                                                        
                                                    }}>Permitir</Button>
                                                    <Button className="m-1" color="primary" onClick={()=>{
                                                        update('Recusar', data.id, 'aluno')
                                                    }}>Recusar</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                
                       </Table>
                        <h2>Coordenador</h2>
                        <Table>
                            <thead>
                                    <tr>
                                            <td>Id</td>
                                            <td>Nome</td>
                                            <td>BI</td>
                                            <td>Área de formação</td>
                                            <td>Telefone</td>
                                            <td>Email</td>
                                            <td>Sexo</td>
                                            <td>Senha</td>
                                            <td>Permissão</td>
                                        </tr>
                                </thead>
                                <tbody>
                                    {coordenador.map((data)=>{
                                        return(
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.nome}</td>
                                                <td>{data.bi}</td>
                                                <td>{data.area}</td>
                                                <td>{data.telefone}</td>
                                                <td>{data.email}</td>
                                                <td>{data.sexo}</td>
                                                <td>{data.senha}</td>
                                                <td>
                                                    <Button className="m-1" color="danger" onClick={()=>{
                                                        deletar(data.id, 'coordenador')
                                                        
                                                    }}>Eliminar</Button>
                                                    <Button className="m-1" onClick={()=>{
                                                        update('Permitir', data.id, 'coordenador')
                                                        
                                                    }}>Permitir</Button>
                                                    <Button className="m-1" color="primary" onClick={()=>{
                                                        update('Recusar', data.id, 'coordenador')
                                                    }}>Recusar</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                
                       </Table>
                       <h2>Encarregado</h2>
                        <Table>
                            <thead>
                                    <tr>
                                            <td>Id</td>
                                            <td>Nome</td>
                                            <td>BI</td>
                                            <td>Telefone</td>
                                            <td>Email</td>
                                            <td>Sexo</td>
                                            <td>Senha</td>
                                            <td>Permissão</td>
                                        </tr>
                                </thead>
                                <tbody>
                                    {encarregado.map((data)=>{
                                        return(
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.nome}</td>
                                                <td>{data.bi}</td>
                                                <td>{data.telefone}</td>
                                                <td>{data.email}</td>
                                                <td>{data.sexo}</td>
                                                <td>{data.senha}</td>
                                                <td>
                                                    <Button className="m-1" color="danger" onClick={()=>{
                                                        deletar(data.id, 'encarregado')
                                                        
                                                    }}>Eliminar</Button>
                                                    <Button className="m-1" onClick={()=>{
                                                        update('Permitir', data.id, 'encarregado')
                                                        
                                                    }}>Permitir</Button>
                                                    <Button className="m-1" color="primary" onClick={()=>{
                                                        update('Recusar', data.id, 'encarregado')
                                                    }}>Recusar</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                
                       </Table>
                       <h2>Funcionário</h2>
                        <Table>
                            <thead>
                                    <tr>
                                            <td>Id</td>
                                            <td>Nome</td>
                                            <td>BI</td>
                                            <td>Telefone</td>
                                            <td>Email</td>
                                            <td>Sexo</td>
                                            <td>Senha</td>
                                            <td>Permissão</td>
                                        </tr>
                                </thead>
                                <tbody>
                                    {funcionario.map((data)=>{
                                        return(
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.nome}</td>
                                                <td>{data.bi}</td>
                                                <td>{data.telefone}</td>
                                                <td>{data.email}</td>
                                                <td>{data.sexo}</td>
                                                <td>{data.senha}</td>
                                                <td>
                                                    <Button className="m-1" color="danger" onClick={()=>{
                                                        deletar(data.id, 'funcionario')
                                                        
                                                    }}>Eliminar</Button>
                                                    <Button className="m-1" onClick={()=>{
                                                        update('Permitir', data.id, 'funcionario')
                                                        
                                                    }}>Permitir</Button>
                                                    <Button className="m-1" color="primary" onClick={()=>{
                                                        update('Recusar', data.id, 'funcionario')
                                                    }}>Recusar</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                
                       </Table>
                       <h2>Director</h2>
                        <Table>
                            <thead>
                                    <tr>
                                            <td>Id</td>
                                            <td>Nome</td>
                                            <td>BI</td>
                                            <td>Telefone</td>
                                            <td>Email</td>
                                            <td>Sexo</td>
                                            <td>Senha</td>
                                            <td>Permissão</td>
                                        </tr>
                                </thead>
                                <tbody>
                                    {director.map((data)=>{
                                        return(
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.nome}</td>
                                                <td>{data.bi}</td>
                                                <td>{data.telefone}</td>
                                                <td>{data.email}</td>
                                                <td>{data.sexo}</td>
                                                <td>{data.senha}</td>
                                                <td>
                                                    <Button className="m-1" color="danger" onClick={()=>{
                                                        deletar(data.id, 'director')
                                                        
                                                    }}>Eliminar</Button>
                                                    <Button className="m-1" onClick={()=>{
                                                        update('Permitir', data.id, 'director')
                                                        
                                                    }}>Permitir</Button>
                                                    <Button className="m-1" color="primary" onClick={()=>{
                                                        update('Recusar', data.id, 'director')
                                                    }}>Recusar</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                
                       </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminInicio