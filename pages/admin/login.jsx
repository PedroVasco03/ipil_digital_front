import NavbarLogin from "./navbarLogin"
import stylelogin from '../../pages/css/navbarlogin.module.css'
import { Button, Input, Label } from "reactstrap"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import Head from "next/head"

function Login(){
    const [danger, setDanger] = useState('')
    const [next, setNext] = useState('')
    const [admin, setAdmin] = useState('')
    const [senha, setSenha] = useState('')
    const [data, setData] = useState([])
    const [total, setTotal] = useState(100)
    useEffect(()=>{
        getData()
    }, [])
    const getData = async ()=>{
     await axios.get('http://localhost:5000/admin').then((response)=>{
            return response.data           
       }).then((data)=>{
            setData(data)
            console.log(data)
       })
       
    }
    const filter = (admin, senha)=>{
        const search = data.filter((data)=> data.administrador === admin && data.senha === senha)
        
        if(search.length == 0){
           if(senha!='' && admin != ''){
                setDanger('Dados não foram encontrados')
                setNext('')
           }
           else{
            setDanger('')
            setNext('')
           }
        }
        else{
            const user = {
                admin: admin,
                senha: senha,
            }
           const id = search.map((data)=>data.id) 
           const nome = search.map((data)=>data.administrador)
           const pass = search.map((data)=>data.senha)
           const logged = {
                id: id,
                nome: nome,
                senha: pass
           }
           const loggedJson = JSON.stringify(logged)
            const userJson = JSON.stringify(user)
            localStorage.setItem('login', userJson)
            localStorage.setItem('data-user', loggedJson)
            const data = localStorage.getItem('login')
            console.log(data)
            setDanger('')
            console.log(search)
        }
    }

    return(
        
        <div>
            <Head>
                <title>Admin | Entrar</title>
            </Head>
            <NavbarLogin></NavbarLogin>
                <form className={stylelogin.form}>
                    <h2 className={`text-center m-2 ${stylelogin.h2}`}>Login - Admin</h2>
                    <Input value={admin} onChange={(e)=>{
                        setAdmin(e.target.value)
                        const admin = e.target.value
                        const filtrarDados = data.filter((data)=>data.administrador == admin)
                        const nome = filtrarDados.map((data)=> data.administrador) 
                        const pass = filtrarDados.map((data)=>data.senha)
                        if(nome[0] == admin && pass == senha){
                            console.log('logado')
                            setNext('/admin/adminInicio')
                            setDanger('')
                        }
                        else{
                            console.log('não logado')
                            setNext('')
                        }

                    }} className="m-3" placeholder="Admininistrador"></Input>
                    <Input value={senha} onChange={(e)=>{
                        setSenha(e.target.value)
                        const password = e.target.value
                        const filtrarDados = data.filter((data)=>data.senha == password && data.administrador == admin)
                        const nome = filtrarDados.map((data)=>data.administrador)
                        const pass = filtrarDados.map((data)=>data.senha)
                        if(nome[0] == admin && password == pass){
                            
                            console.log('logado')
                            setDanger('')
                            setNext('/admin/adminInicio')
                        }
                        else{
                            console.log('não logado')
                            setNext('')                  
                        }
                        console.log(nome)
                        console.log(filtrarDados)
                    }} className="m-3"  placeholder="Senha"></Input>
                    <Label className="text-danger m-3">{danger}</Label>
                    <br/>
                    <Link href={next}>
                        <Button color="primary" className="m-3" onClick={()=>filter(admin, senha)}>Entrar</Button>
                    </Link>
                   <br/>
                    <Link className="m-3" href={'/admin/criar-admin'}>
                        <Label style={{cursor:'pointer'}} className="text-secondary">Criar conta</Label>
                    </Link>
                    <Link className="text-center" href={'/admin/pesquisar'}>
                        <Label  style={{cursor:'pointer'}} className="text-danger">Esqueceu a senha?</Label>
                    </Link>
                </form>
        </div>
       
    )
}
export default Login