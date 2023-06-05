import style from "../../../css/Login.module.css"
import { validateName, validateEmail, validateTelefone, validateBi, validatePassword} from "../../components/utils/regex";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button, Input } from "reactstrap";
import imgbtn from '../../images/next_page_50px.png'
import imgbtnB  from '../../images/back_page_50px.png'
import imgbtnCANCEL from '../../images/cancel_50px.png'
import Image from "next/image";
import Link from "next/link";

let allData = []
function Funcionario(){
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers = async ()=>{
        allData = []
        await axios.get('http://localhost:5000/aluno')
        .then((response)=>{
            response.data.map((data)=>{
                allData.push(data)
            })
            
        })
        .catch(()=>console.log('erro: solicitação negada'))
        await axios.get('http://localhost:5000/coordenador')
        .then((response)=>{
            response.data.map((data)=>{
                allData.push(data)
            })
        })
        .catch(()=>console.log('erro: solicitação negada'))
    
        await axios.get('http://localhost:5000/director')
        .then((response)=>{
            response.data.map((data)=>{
                allData.push(data)
            })
        })
        .catch(()=>console.log('erro: solicitação negada'))
        await axios.get('http://localhost:5000/encarregado')
        .then((response)=>{
            response.data.map((data)=>{
                allData.push(data)
            })
        })
        .catch(()=>console.log('erro: solicitação negada'))
        
        await axios.get('http://localhost:5000/funcionario')
        .then((response)=>{
            response.data.map((data)=>{
                allData.push(data)
            })
        })
        .catch(()=>console.log('erro: solicitação negada'))
        console.log(allData)
    }    
function handleChangue({target}){
    setSexo(target.value);
}

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
    const saverUser = async ()=>{
        
        if(nome!="" && telefone!="" && email!="" && sexo!="" && senha!=""){
            alert('entrou')
            if(validateName.test(nome) && validateTelefone.test(telefone) && validateEmail.test(email) && validateBi.test(numbi)&& validatePassword.test(senha)){
                const fetchData = allData.filter((data)=> data.nome == nome || data.bi ==numbi || data.email == email || data.telefone == telefone)
                if(fetchData.length == 0){
                alert('salvo com sucesso')
                await axios.post('http://localhost:5000/funcionario',{
                    nome: nome,
                    telefone: telefone,
                    email: email,
                    bi: numbi,
                    sexo: sexo,
                    senha: senha
                })
            }
            else{
                alert('Dados digitados já existem')
            }
                
            }
            else{
                alert('dados inválidos!')
            }
        }
        
    }
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
    const [sexo, setSexo] = React.useState('masculino');
    const [area, setArea] = React.useState('');
    const [css, setCss] = React.useState(null)
    const [error, setError] = useState('')
    const [next, setNext] = useState('')
    function ss(){
        if(css===null){
            if((nome!='' && !nomeErr) && (email!='' && !emailErr) && (telefone!='' && !telefoneErr))
            setCss('Login_next3__EuJqb')
        }
    }
    function rs(){
        if(css==='Login_next3__EuJqb')
            setCss(null)
    }
    return <>
    <form method="post" className={style.sign_up_form+" "+ style.form +" "+ css} onSubmit={saverUser}>
        <h2 className={style.title+" "+ style.h2}>Cadastrar-se</h2>
        <div className={style.original}>
            <div className={style.input_field+" " +style.div}>
            <i className={"bi-person-fill "+style.i}></i>
            <input
                type="text"
                name="usernew"
                placeholder="Nome"
                className={style.input}
                value={nome}
                id="nome"
                onKeyPress={deteta}
                onChange={
                    (event) => {
                    const nome = event.target.value
                    setNome (event.target.value)
                    setNomeErr(false)
                    setDesabilitado(false)
                    if(validateName.test(nome) && validateTelefone.test(telefone) && validateEmail.test(email) && validateBi.test(numbi)&& validatePassword.test(senha)){
                        const fetchData = allData.filter((data)=> data.nome == nome || data.bi ==numbi || data.email == email || data.telefone == telefone)
                        if(fetchData.length == 0){
                            setError('')
                            setNext('/login/aluno/ProsseguirAluno')
                        }
                        else{
                            setNext('')
                            setError('Dados digitados já existem')
                        }

                    }
                    else{
                        setNext('')
                    }
                }

                }
            onBlur={validate}
            required={true}
            />
        </div>
        {nomeErr && <p>Por favor digite nome válido</p>}

        <div className={style.input_field + " " +style.div}>
            <i className={"bi-envelope-fill"+" "+ style.i}></i>
            <input
                type="text"
                name="email"
                placeholder="Email"
                className={style.input}
                value={email}
                onChange={(event) =>{
                    const mail = event.target.value
                    setEmail(event.target.value)
                    setEmailErr(false)
                    setDesabilitado(false)
                    if(validateName.test(nome) && validateTelefone.test(telefone) && validateEmail.test(mail) && validateBi.test(numbi)&& validatePassword.test(senha)){
                        const fetchData = allData.filter((data)=> data.nome == nome || data.bi ==numbi || data.email == email || data.telefone == telefone)
                        if(fetchData.length == 0){
                            setError('')
                            setNext('/login/aluno/ProsseguirAluno')

                        }
                        else{
                            setNext('')
                            setError('Dados digitados já existem')
                        }
                    }
                    else{
                        setNext('')
                    }
                }}
                onBlur={validate}
                required={true}
            />
        </div>
        {emailErr && <small>Por favor  digite um email válido</small>}

        <div className={style.input_field+" " +style.div}>
            <i className={"bi-phone-fill "+style.i}></i>
            <input
                type="text"
                name="mailnew"
                placeholder="Telefone"
                className={style.input}
                maxLength={11}
                minLength={9}
                value={telefone}
                onKeyPress={detetaNum}
                onChange={
                    (event) => {
                    const cellphone = event.target.value
                    setTelefone (event.target.value)
                    setTelefoneErr(false)
                    setDesabilitado(false)

                    if(validateName.test(nome) && validateTelefone.test(cellphone) && validateEmail.test(email) && validateBi.test(numbi)&& validatePassword.test(senha)){
                        const fetchData = allData.filter((data)=> data.nome == nome || data.bi ==numbi || data.email == email || data.telefone == telefone)
                        if(fetchData.length == 0){
                            setError('')
                            setNext('/login/aluno/ProsseguirAluno')
                        }
                        else{
                            setError('Dados digitados já existem')
                            setNext('')
                        }
                    }
                    else{
                        setNext('')
                    }
                    }
                }
                onBlur={validate}
                required={true}
            />
        </div>
        {telefoneErr && <small>Por favor digite número válido EX: "999-999-999"</small>}
        <div className={style.NextPrev}>
            <Image src={imgbtn} className={style.next+" "+style.imgbtn} onClick={ss}/>
        </div>
    </div>
    <div className={style.prosseguir3}>
        <div className={style.input_field +" "+style.div}>
            <i className={"bi-card-heading "+ style.i}></i>
            <input
                type="text"
                name="binew"
                className={style.input}
                placeholder="Bilhete de identidade"
                maxLength={14}
                value={numbi}
                onChange={
                    (event) => {
                    const bi = event.target.value
                    setNumBi (event.target.value)
                    setBiErr(false)
                    setDesabilitado(false)
                    if(validateName.test(nome) && validateTelefone.test(telefone) && validateEmail.test(email) && validateBi.test(bi)&& validatePassword.test(senha)){
                        const fetchData = allData.filter((data)=> data.nome == nome || data.bi ==numbi || data.email == email || data.telefone == telefone)
                        if(fetchData.length == 0){
                            setError('')
                            setNext('/login/aluno/ProsseguirAluno')
                        }
                        else{
                            setError('Dados digitados já existem')
                            setNext('')
                        }
                    }
                    else{
                        setNext('')
                    }
                }
                }
                onBlur={validate}
                required={true}
                />
            </div>
            {biErr && <small>Por favor digite numero do bilhete válido</small>}
            <div className={style.input_field +" "+style.div}>
                <i className={"bi-lock-fill "+style.i}></i>
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className={style.input}
                    maxLength={8}
                    value={senha}
                    onChange={
                            (event) => {
                                const password = event.target.value
                            setSenha (event.target.value)
                            setSenhaErr(false)
                            setDesabilitado(false)
                            if(validateName.test(nome) && validateTelefone.test(telefone) && validateEmail.test(email) && validateBi.test(numbi)&& validatePassword.test(password)){
                                const fetchData = allData.filter((data)=> data.nome == nome || data.bi ==numbi || data.email == email || data.telefone == telefone)
                                if(fetchData.length == 0){
                                    setError('')
                                    setNext('/login/aluno/ProsseguirAluno')
                                }
                                else{
                                    setError('Dados digitados já existem')
                                    setNext('')
                                }
                            }
                            else{
                                setNext('')
                            }
                        }

                    }
                    onBlur={validate}
                    required={true}
                />
            </div>
            {senhaErr &&
                <small>
                    A senha deve incluir: 8 dígitos , incluíndo uma letra maiúscula e um número
                </small>
            }

                <div className="gender-field div"  onChange={(event) => setSexo (event.target.value)}>
                    <p>Sexo</p>
                    <div className="radio-field div" >
                        <label htmlFor="masculino" >Masculino</label>
                        <Input
                            type="radio"
                            value="masculino"
                            id="masculino"
                            className="input mx-1"
                            checked={sexo === 'masculino'}
                            onChange={handleChangue}
                        />
                        <label className="mx-2" htmlFor="feminino">Feminino</label>
                        <Input
                            type="radio"
                            id="feminino"
                            value="feminino"
                            className="input mx-1"
                            checked={sexo==='feminino'}
                            onChange={handleChangue}
                        />
                    </div>
                </div>
            <Button type="submit">
                Cadastrar
            </Button>
            <div className={style.NextPrev}>
            <Image src={imgbtnCANCEL} className={style.prev +" "+style.imgbtn} onClick={rs} />
            </div>
    </div>
    </form>
</>;
}
export default Funcionario