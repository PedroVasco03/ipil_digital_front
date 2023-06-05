import React from "react";
import ButtonConfirm from "../../components/ButtonConfirm";
import {validateEmail,validatePassword} from "../../components/utils/regex"
import style from "../../../css/Login.module.css"
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Label } from "reactstrap";



function SignInForm(){
    
   const [funcionario, setFuncionario] = useState([])
   const [danger, setDanger] = useState('')
   const [next, setNext] = useState('')
   useEffect(()=>{
        getFuncionario()
   },[])

   const getFuncionario = async ()=>{
        await axios.get('http://localhost:5000/funcionario')
        .then((response)=>{
            setFuncionario(response.data)
        })
    }
   const cadastrar = (email, senha)=>{
        if(email!="" && senha!=""){
            if(validateEmail.test(email) && validatePassword.test(senha)){
                const search = funcionario.filter((data)=> data.email === email && data.senha === senha)
                if(search.length == 0){
                    setDanger('dados não encontrados!')
                }
                search.map((data)=>{
                    if(data.permissao=='Recusar'){
                       setDanger('Acesso negado para este usuário!')
                        setNext('')
                    }
                    else if(data.permissao=='Permitir'){
                        const dado ={
                            id: data.id,
                            nome: data.nome,
                            bi: data.bi,
                            telefone: data.telefone,
                            email: data.email,
                            sexo: data.sexo,
                            senha: data.senha
                        }
                       
                        const dadoJSON = JSON.stringify(dado)
                        localStorage.setItem('funcionarioData', dadoJSON)
                        setDanger('Acesso Permitido')
                        setNext('/funcionario/home')
                        
                        
                    }
                    else if(data.permissao == null){
                        setDanger('A sua conta será avaliada pelo o Administrador')
                        setNext('')
                    }
                    
                })
                
            }
        }
   }
   
    
    const [desabilitado, setDesabilitado] = React.useState(false)
    
    const [email, setEmail] = React.useState('');
    const [emailErr, setEmailErr] = React.useState(false);
    const [senha, setSenha] = React.useState('');
    const [senhaErr, setSenhaErr] = React.useState(false);
    const validate = () => {
        if(!validateEmail.test(email)){
            setEmailErr(true)
            setDesabilitado(true)
        }else{
            setEmailErr(false)
            setDesabilitado(false)
        }
        if(!validatePassword.test(senha)){
            setSenhaErr(true)
            setDesabilitado(true)
        }else{
            setSenhaErr(false)
            setDesabilitado(false)
        }
    }
   
    return(
        <>
            <form className={style.sign_in_form+" " +style.form}>
                <h2 className={style.title + " " +style.h2}>Entrar</h2>
                <div className={style.input_field + " " +style.div}>
                    <i className={"bi-envelope-fill"+" "+ style.i}></i>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        className={style.input}
                        value={email}
                        onChange={(event) =>{
                            setNext('') 
                            setDanger('')
                            setEmail(event.target.value)
                            setEmailErr(false)
                            setDesabilitado(false)
                        }}
                        onBlur={validate}
                        required={true}

                        
                    />
                </div>
            {emailErr && <p>Por favor  digite um email válido</p>}

            <div className={style.input_field +" "+style.div}>
                <i className={"bi-lock-fill "+style.i}></i>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha"
                    className={style.input}
                    minLength={8}
                    value={senha}
                    onChange={
                            (event) => {
                            setDanger('')
                            setNext('')
                            setSenha (event.target.value)
                            setSenhaErr(false)
                            setDesabilitado(false)}
                    } 
                    onBlur={validate}
                    required={true}
                />
            </div>
            {senhaErr && <p>A senha deve incluir:
                            8 dígitos , incluíndo uma letra maiúscula e um número
                        </p>}
             <Label className="text-danger">{danger}</Label>   
             <Link href={next} className={style.btn+" "+ style.solid+" "+ style.input +" text-center p-2 text-decoration-none text-white"} onClick={()=>{cadastrar(email,senha)}}>
                Logar
             </Link>
            </form>
        </>
    )
}

export default SignInForm