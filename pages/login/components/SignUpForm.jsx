import React from "react";
import Link from 'next/link'
import PhoneBox from "./PhoneBox";
import NameBox from "./NameBox";
import EmailBox from "./EmailBox";
import BiBox from "./BiBox";
import PasswordBox from "./PasswordBox";
import GenderField from "./GenderField";
import ButtonConfirm from "./ButtonConfirm";
import CourseBox from "./CourseBox";
import NumProcessBox from "./NumProcessBox";
import { validateName, validateEmail, validateTelefone, validateBi, validatePassword} from "./utils/regex";
import style from "../../css/Login.module.css"
import { useEffect } from "react";
import axios from "axios";
import Aluno from "../aluno/components/aluno";
import Coordenacao from "../coordenacao/components/Coordenacao";
import Encarregado from "../encarregado/components/encarregado";
import Funcionario from "../funcionario/components/funcionario";
import Director from "../director/components/director";

function deteta (e){
    const Code = (e.charCode ? e.charCode : e.wich);
    if(Code > 40 && Code <=62){
        e.preventDefault()
    }
}
function detetaNum (e){ 
    const Code = (e.charCode ? e.charCode : e.wich);
    if(Code < 40 || Code > 58){
        e.preventDefault()
    }
}
function detetaPro (e){
    const Code = (e.key ? e.key : e.key);
    console.log(Code)
    if( Code !== '0' & 
        Code !== '1' & 
        Code !== '2' & 
        Code !== '3' & 
        Code !== '4' & 
        Code !== '5' & 
        Code !== '6' & 
        Code !== '7' & 
        Code !== '8' & 
        Code !== '9'){
        e.preventDefault()
    }
}
function SignUpForm({user}){
    const [desabilitado, setDesabilitado] = React.useState(false)
    const [nome, setNome] = React.useState('');
    const [nomeErr, setNomeErr] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailErr, setEmailErr] = React.useState(false);
    const [telefone, setTelefone] = React.useState('');
    const [telefoneErr, setTelefoneErr] = React.useState('');
    const [numbi, setNumBi] = React.useState('');
    const [biErr, setBiErr] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [senhaErr, setSenhaErr] = React.useState(false);
    const [sexo, setSexo] = React.useState('');
    const [curso, setCurso] = React.useState('');
    const [numprocesso, setNumProcesso] = React.useState('');

    function handleChangue({target}){
        setSexo(target.value);
    }

    const validate = () => {
        if(!validateName.test(nome)){
            setNomeErr(true)
            setDesabilitado(true)
        }else{
            setNomeErr(false)
            setDesabilitado(false)
        }
        if(!validateEmail.test(email)){
            setEmailErr(true)
            setDesabilitado(true)
        }else{
            setEmailErr(false) 
            setDesabilitado(false)
        }
        if(!validateTelefone.test(telefone)){
            setTelefoneErr(true)
            setDesabilitado(true)
        }else{
            setTelefoneErr(false)
            setDesabilitado(false)
        }
        if(!validateBi.test(numbi)){
            setBiErr(true)
            setDesabilitado(true)
        }else{
            setBiErr(false)
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


    if (user === "aluno" ) {
        return(
            <Aluno></Aluno>
        )
}else if(user === "coordenador"){
        return(
            <>
                <Coordenacao></Coordenacao>
            </>
        )
    }else if(user === "encarregado"){
        return(
            <>
                <Encarregado></Encarregado>
            </>
        )
    }else if(user==='funcionario'){
        return(
            <>
                <Funcionario></Funcionario>
            </>
        )
    }
    else if(user === 'director'){
        return(
            <>
                <Director></Director>
            </>
        )
    }

    else {return(<><h1>nada</h1></>)}
}

export default SignUpForm