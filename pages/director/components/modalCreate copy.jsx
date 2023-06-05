import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, Input,  Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"

function  ModalCreate({show, closed}){
    const [name, setName] = useState('')
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await axios.get("http://localhost:5000/coordenacao")
        .then((response)=>{
            console.log(response.data)
        })
             
    }
    const saveData = async ()=>{
        const data = JSON.parse(localStorage.getItem("coordenadorData"))
        const id = data.id
        console.log(id)
        if(name !=""){    
            await axios.post("http://localhost:5000/coordenacao",{
                nome: name,
                idcoordenador: id
            })
        }
    }
    return(
        <div>
            <Modal isOpen={show} onClosed={closed}>
                <ModalHeader toggle={closed}>
                    <h2>Coordenação</h2>
                </ModalHeader>
                <Form >
                <ModalBody>
                    <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nome da coordenação"></Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={()=>{
                        saveData()
                        closed()
                    }}>Criar</Button>
                </ModalFooter>
                </Form>
            </Modal>
        </div>
    )
}
export default ModalCreate