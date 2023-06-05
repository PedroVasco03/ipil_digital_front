import NavbarLogin from "./navbarLogin"
import stylelogin from '../../pages/css/navbarlogin.module.css'
import { Button, Input, Label } from "reactstrap"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import Head from 'next/head'

function CriarAdmin(){
    const [admin, setAdmin] = useState('')
    const [senha, setSenha] = useState('')
    const saveUser = async (e)=>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:5000/admin',
             {
                administrador: admin,
                senha: senha
             }
            )
            alert('Admin salvo com sucesso')
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <Head>
                <title>Admin | Cadastro</title>
            </Head>
            <NavbarLogin></NavbarLogin>
            
                <form className={stylelogin.form} onSubmit={saveUser} >
                    <h2 className={`text-center m-2 ${stylelogin.h2}`}>Cadastrar - Admin</h2>
                    <Input value={admin} onChange={(e)=>setAdmin(e.target.value)} className="m-3" placeholder="Admininistrador"></Input>
                    <Input value={senha} onChange={(e)=>setSenha(e.target.value)} className="m-3"  placeholder="Senha"></Input>
                    <Button color="primary" className="m-3">Criar</Button>
                   <br/>
                </form>
        </div>
    )
}
export default CriarAdmin