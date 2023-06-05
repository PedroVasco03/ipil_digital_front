
import style from "../../../css/Login.module.css"
import style2 from "../../../css/Prosseguir.module.css"
import { validateName, validateEmail, validateTelefone, validateBi, validatePassword} from "../../components/utils/regex";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button, Input, Label } from "reactstrap";
import { useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import imgbtn from '../../images/next_page_50px.png'
import imgbtnB  from '../../images/back_page_50px.png'
import imgbtnCANCEL from '../../images/cancel_50px.png'

let allData = []
function Aluno(){
   useEffect(()=> {
        getUsers()
   }, [])
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
            if(validateName.test(nome) && validateTelefone.test(telefone) && validateEmail.test(email) && validateBi.test(numbi)&& validatePassword.test(senha)){
                const fetchData = allData.filter((data)=> data.nome == nome || data.bi ==numbi || data.email == email || data.telefone == telefone)
                if(fetchData.length == 0){
                    
                    await axios.post('http://localhost:5000/aluno',{
                        nome: nome,
                        bi: numbi,
                        area: area,
                        curso: curso,
                        turma: turma,
                        classe: classe,
                        numeroprocesso: numprocesso,
                        telefone: telefone,
                        email: email,
                        sexo: sexo,
                        senha: senha,
                    })
                    alert('Dados salvos com sucesso!')
                   
                    
                }
                else{
                    setNext('')
                }
                console.log(fetchData)

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
    const [curso, setCurso] = React.useState('');
    const [area, setArea] = React.useState('');
    const [classe, setClasse] = React.useState('');
    const [turma, setTurma] = React.useState('');
    const [numprocesso, setNumProcesso] = React.useState('');
    const [next, setNext] = React.useState('')
    const [error, setError] = useState('')
    const [css, setCss] = React.useState(null)
    
    function ss(){
        if(css===null){ 
            if((nome!='' && !nomeErr) && (email!='' && !emailErr) && (telefone!='' && !telefoneErr))
            setCss('Login_next1__SIHIv')
        }
        else if(css==='Login_next1__SIHIv'){
            if((area!='') && (numprocesso!='') && (!biErr && numbi!=''))
            setCss('Login_next2__Iv6K6')
        }
        else if('Login_next2__Iv6K6'){
            if((curso!='') && (classe!='')  && (turma!=''))
            setCss('Login_next3__EuJqb')
        }
    }
    function rs(){
        if(css==='Login_next2__Iv6K6') 
            setCss('Login_next1__SIHIv')
        else if(css==='Login_next1__SIHIv')
            setCss(null)
        else if('Login_next3__EuJqb')
            setCss(null)
    }
    return <>
    <form method="post" className={style.sign_up_form+" "+ style.form +" "+ css}>
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
    <div className={style.div +' '+style.prosseguir1}>
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
            <div className={style2.input_field+" "+ style2.div}>
                    <i className={"bi-123 "+ style2.i}></i>
                    <input 
                        type="number" 
                        name="processnumber" 
                        className={style2.input}
                        placeholder="Número de Processo" 
                        value={numprocesso}
                        required={true}
                        onChange={(event) => {
                            console.log(numprocesso)
                            setNumProcesso(event.target.value)}}
                    />
                </div>
                <div className={style2.input_field +" "+style2.div}>
                <i className={"bi-text-paragraph "+ style2.i}></i>
                <select
                    value={area} 
                    className= {style2.select+" "+style2.input}
                    onChange={({target}) => setArea (target.value)} 
                    id="area"
                >
                    <option disabled value="">Selecione a área</option>
                    <option value="construcao_civil">Construção Civil</option>
                    <option value="eletricidade">Eletricidade</option>
                    <option value="informatica">Informática</option>
                    <option value="mecanica">Mecanica</option>
                    <option value="quimica">Química</option>
                    required={true}
                </select>
                </div>
        <div className={style.NextPrev}>
            <Image src={imgbtnB} className={style.prev+" "+style.imgbtn} onClick={rs}/>
            <Image src={imgbtn} className={style.next+" "+style.imgbtn} onClick={ss}/>
        </div>
    </div>
    <div className={style.prosseguir2}>
        <div className={style2.input_field +" "+  style2.div}>
            <i className={"bi-bar-chart-steps " + style2.i}></i>
            <select className={style2.select+" "+style2.input} name="curso" value={curso} onChange={(event) => setCurso (event.target.value)}>
                <option className="option" disabled value="">Selecione o curso</option>
                <option className="option" value="ii">Técnico de Infor. {"(II)"}</option>
                <option className="option" value="ig">Técnico de G.S. Infor. {"(IG)"}</option>
                required={true}
            </select>
        </div>
        <div className={style2.input_field+" "+ style2.div}>
            <i className={"bi-text-indent-right "+style2.i}></i>
            <select name="classe" className={style2.select+ " "+ style2.input} value={classe} onChange={(event) => setClasse (event.target.value)}>
                <option disabled value="">Selecione a classe</option>
                <option value="10">10ª classe</option>
                <option value="11">11ª classe</option>
                <option value="12">12ª classe</option>
                <option value="13">13ª classe</option>
                required={true}
            </select>
        </div>
        <div className={style2.input_field+" "+style2.div}>
        <i className={"bi-person-lines-fill "+style2.i}></i>
        <select name="turma" className={style2.select+" "+style2.input} value={turma} onChange={(event) => setTurma (event.target.value)}>
            <option disabled value="">Selecione a turma</option>
            <option value="...">...</option>
            required={true}
            </select>
        </div>
        <div className={style.NextPrev}>
            <Image src={imgbtnB} className={style.prev+" "+style.imgbtn} onClick={rs}/>
            <Image src={imgbtn} className={style.next+" "+style.imgbtn} onClick={ss}/>
        </div>
    </div>
    <div className={style.prosseguir3}>
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
            <Label className="text-danger">{error}</Label>
            <Button onClick={saverUser}>
                Cadastrar                                
            </Button>
            <div className={style.NextPrev}>
            <Image src={imgbtnCANCEL} className={style.prev +" "+style.imgbtn} onClick={rs} />
            </div>
    </div>
            
    </form>
</>;
}
export default Aluno