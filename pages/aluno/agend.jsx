import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from "reactstrap"
import Head from "next/head"
import styleGeral from '../css/logado.module.css'
import NavBarAluno from "./navbar"
import SideBarAluno from "./sidebar"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import ModalComponent from "./components/modal"
function Agend(){
    const [hora, setHora] = useState([])
    const [aluno, setAluno] = useState([])
    const [horario, setHorario] = useState([])
    const[coordenador, setCoordenador] = useState([])
    const [para, setPara] = useState('Coordenação')
    const [senha, setSenha] = useState(0)
    const [dia, setDia] = useState('segunda')
    const [hour, setHour] = useState('7:00')
    const [mensagem, setMensagem] = useState('')
    const [modal, setModal] = useState(false)
    const toggleModal = ()=> setModal(!modal)
    const modalClose = ()=> setModal(false)
    const diaSemana = ["7:00","7:30","8:00","8:30","9:00","9:30",
                        "10:00","10:30","11:00","11:30","12:00",
                        "12:30","13:00","13:30","14:00","14:30",
                        "15:00","15:30"
                        ]
    useEffect(()=>{
        const generator = Math.floor( Math.random() * 1000000)
        setSenha(generator)
        getUsers()
        getHorario('Coordenação')
    },[])
    const getUsers = async ()=>{
        await axios.get('http://localhost:5000/reclamacao')
        .then((response)=>{
            setAluno(response.data)
        })
        .catch(()=>console.log('erro: solicitação negada'))

    }
    
    const getHorario =  async (route)=>{
        
        if(route == 'Coordenação'){
               
           await axios.get(`http://localhost:5000/horario-coordenacao`)
            .then((response)=>{
                    const item = JSON.parse(localStorage.getItem('coordenador'))
                    const dado = response.data.filter((data)=> data.idcoordenador === item[0].id)
                    console.log(dado)
                    setHorario(dado)
                    const inicio = dado[0].inicio 
                    const fim = dado[0].fim
                    const indexInicio = diaSemana.indexOf(inicio)
                    const indexFim = diaSemana.indexOf(fim)
                    const filtrarSemana = diaSemana.filter((item, index)=> index >= indexInicio && index <= indexFim)
                    setHora(filtrarSemana)   
                
            })
        }
        else if(route == 'Secretária'){
            let id = JSON.parse(localStorage.getItem('directorData')).id
            console.log(id)
            await axios.get(`http://localhost:5000/horario-secretaria`)
             .then((response)=>{
                    let box = []
                     const dado = response.data.filter((dado)=>dado.idhorario == id)
                     setHorario(dado)
                     const inicio = dado[0].inicio 
                     const fim = dado[0].fim
                     const indexInicio = diaSemana.indexOf(inicio)
                     const indexFim = diaSemana.indexOf(fim)
                     const filtrarSemana = diaSemana.filter((item, index)=> index >= indexInicio && index <= indexFim)
                     setHora(filtrarSemana)   
                 
             })
         }  
    }
    const save = async ()=>{
        const aluno = JSON.parse(localStorage.getItem('alunoData'))
            await axios.post('http://localhost:5000/reclamacao',{
               para: para,
               idsenha: senha,
               idaluno: aluno.id,
               diasemana: dia,
               hora: hour,
               mensagem: mensagem
            })
        
    }
    
    return (
        <div>
            <Head>
                <title>ALUNO | Agenda</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarAluno></NavBarAluno>
        <div className={styleGeral.container}>
            <SideBarAluno/>
            <div className={styleGeral.content}>    
                <div className="p-3">
                <form method="post">
                    <FormGroup>
                        <Label>Reclamação para:</Label>
                        <Input type="select" value={para} onChange={(e)=>{
                            setPara(e.target.value)
                            getHorario(e.target.value)
                        }}>
                            <option value={'Coordenação'}>Coordenação</option>
                            <option value={'Secretária'}>Secretária</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <label>Senha:</label>
                        <Input value={senha} readOnly></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="attend">Dia de Semana:</Label>
                        <Input id="attend" type="select" value={dia} onChange={(e)=>setDia(e.target.value)}>
                                {horario.map((item, index)=>{
                                        return(
                                            <option key={index} value={item.diasemana}>{item.diasemana}</option>
                                            )
                                })}
                        </Input> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="attend">Hora de Atendimento:</Label>
                        <Input id="attend" type="select" value={hour} onChange={(e)=>setHour(e.target.value)}>
                            {hora.map((item, index)=>{
                                
                                return(
                                    <option>{item}</option>
                                )
                            })
                            }
                        </Input> 
                    </FormGroup>
                    <FormGroup>
                            <Label>Informação:</Label>
                            <Input value={mensagem} type='textarea' style={{}} onChange={(e)=>setMensagem(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                            <Button color="primary" className="m-2" onClick={save}>Agendar</Button>
                            <Button color="primary" className="m-2" onClick={toggleModal}>Ver Agendados</Button>
                            <ModalComponent show={modal} closed={modalClose}/>
                    </FormGroup>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Agend