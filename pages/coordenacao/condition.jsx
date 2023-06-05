import { Button, Card, CardBody, Label } from "reactstrap"
import empty from '../../public/images/images-system/empty.png'
import Image from 'next/image'
import styleSide from'../css/sideBar.module.css'
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import ModalView from "./components/modalVisualizar"
import ModalMessage from "./components/modalMessage"
function Condition(){
    const [data, setData] = useState([])
    const [incio, setInicio] = useState('')
    const [reclamacao, setReclamacao] = useState([])
    const [modal, setModal] = useState(false)
    const toggleModal = ()=> setModal(!modal)
    const modalClose = ()=> setModal(false)
    const [modal2, setModal2] = useState(false)
    const toggleModal2 = ()=> setModal2(!modal2)
    const modalClose2 = ()=> setModal2(false)
    const [message, setMessage] = useState([])
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [dia, setDia] = useState('')
    useEffect(()=>{
        getUsers()
        getReclamacao()
    
    },[])
   
    const getReclamacao = async ()=>{
        await axios.get('http://localhost:5000/reclamacao')
        .then((response)=>{
             
             const search = response.data.filter((data)=> data.para === "Coordenação")
             setReclamacao(search)
            
        })
     }
    const deleteData = async (id) =>{
        await axios.delete(`http://localhost:5000/reclamacao/${id}`)
        getReclamacao() 
    }
    const getUsers = async ()=>{
        const response = await axios.get('http://localhost:5000/horario-coordenacao')
        .then((response)=>{
        const pedido = response.data
        console.log(pedido)
        const dado = JSON.parse(localStorage.getItem('coordenadorData'))
        console.log(dado)
        const search = pedido.filter((data)=> data.idcoordenador === dado.id)
        console.log(search) 
        console.log('buscando dados no banco de dados')
        setData(search)
        console.log(data)
        })
        .catch(()=>console.log('erro: solicitação negada'))
        
        
    }
    if(data.length == 0){
        return(
            <div className="d-flex flex-column align-items-center w-100">
                <Image  className={styleSide.home_img} src={empty} />
                <p>Nenhuma actividade.</p>
            </div>
        )
    }
    else{
        return(
          <div className="m-5">
            <Card className="p-4">
               
                <div className="d-flex flex-wrap">
                <Label className="m-1" style={{fontSize:'1.5rem'}}>Dias de Atendimento:</Label>
                    {data.map((item)=>{
                        return(
                            <Label className="m-1" style={{fontSize:'1.5rem'}}>{item.diasemana}</Label>

                        )
                    })}
                </div>
                <Label className="bold m-2" style={{fontSize:'1.5rem'}}>Atendimento das {data[0].inicio}h ás {data[0].fim}h</Label>
                <Label className="m-2" style={{fontSize:'1.5rem'}}>Limite de pessoas para atendendimento: {data[0].limite}</Label>
        </Card>
        <div>
                    {reclamacao.map((data)=>{
                        return(
                            <div>
                                <Card className="m-2">
                                    <CardBody className="d-flex justify-content-between">
                                        <p>Senha: {data.idsenha}</p>
                                        <div>
                                            <Button onClick={()=>{
                                                toggleModal()
                                                setSenha(data.idsenha)
                                                setMensagem(data.mensagem)
                                                setDia(data.diasemana)
                                            }} style={{padding:"2px 5px"}} className="m-1">Visualizar</Button>
                                            <Button onClick={()=>deleteData(data.id)} color="danger" style={{padding:"2px 5px"}} className="m-1">Recusar</Button>
                                            <Button onClick={()=>{
                                                toggleModal2()
                                                setSenha(data.idsenha)
                                            }}  color="primary" style={{padding:"2px 5px"}} className="m-1">Responder</Button>
                                        </div>

                                    </CardBody>
                                </Card>

                            </div>
                        )
                    })}
                    <ModalMessage show={modal2} closed={modalClose2} senha={senha}></ModalMessage>
                    <ModalView show={modal} closed={modalClose} senha={senha} mensagem={mensagem} dia={dia} />
                </div>
          </div>
        )
    }
}
export default Condition