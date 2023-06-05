import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Card, CardBody, CardFooter } from "reactstrap"
const listDay = []
const data = []
function ModalComponent({show, closed}){
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        getUsers()
     },[])
    
     const getUsers = async ()=>{
         const response = await axios.get('http://localhost:5000/reclamacao')
         .then((response)=>{
            const aluno = JSON.parse(localStorage.getItem('alunoData'))
            const fill = response.data
           const search = fill.filter((data)=>data.idaluno === aluno.id)  
           console.log(search)  
            setDatas(search)
         })
         .catch(()=>console.log('erro: solicitação negada'))
         
         
     }
    return(
        <div>
            <Modal isOpen={show} onClosed={closed}>
                <ModalHeader toggle={closed}>
                    <h2>Reclamações agendadas</h2>
                </ModalHeader>
                <ModalBody>
                    {datas.map((item)=>{
                        return (
                            <Card className="m-3">
                                <CardBody>
                                    <Label>Para: {item.para}</Label>
                                    <br/>
                                    <Label>Senha: {item.idsenha}</Label>
                                    <br/>
                                    <Label>Dia: {item.diasemana}</Label>
                                    <br/>
                                    <Label>Hora: {item.hora}</Label>
                                    <br />
                                    <Label>Mensagem: {item.mensagem}</Label>
                                </CardBody>
                                <CardFooter>
                                    <Button color="primary" className="m-2">Editar</Button>
                                    <Button color="danger" className="m-2">Eliminar</Button>
                                </CardFooter>
                            </Card>
                        )
                    })

                    }
                </ModalBody> 
            </Modal>
        </div>
    )
}
export default ModalComponent