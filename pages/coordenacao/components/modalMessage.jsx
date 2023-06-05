import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"

function ModalMessage({show, closed, senha}){
    useEffect(()=>{
        getMensagem()
       
    },[])
   
    const [message, setMessage] = useState([])
    const [mensagem, setMensagem] = useState('')
    const getMensagem = async ()=>{
        await axios.get('http://localhost:5000/mensagem')
        .then((response)=>{
            setMessage(response.data)
        })
    }
  
     const saveMensagem = async ()=>{
        let aluno
        let nome
        if(senha !=""){
        
            await axios.get('http://localhost:5000/reclamacao')
            .then((response)=>{
                const search = response.data.filter((data)=> data.idsenha === senha)
                console.log(search)
                aluno = search[0].idaluno
                
            })
        }
        
        const dado = JSON.parse(localStorage.getItem('coordenadorData'))
       if(mensagem !="" ){
            await axios.get('http://localhost:5000/aluno')
            .then((response)=>{
                const data = response.data.filter((dado)=> dado.id === aluno)
                nome = data[0].nome
            })
            await axios.post('http://localhost:5000/mensagem',{
                para: 'Coordenação',
                idEnviar: dado.id,
                idEnviado: aluno,
                mensagem: mensagem,
                nomeEnviado: nome
            })
            alert('Salva com sucesso')
    }
    else{
        alert('Não foi enviado!')
    }
    }
    return(
        <div>
            <Modal isOpen={show} onClosed={closed}>
                <ModalHeader toggle={closed}>
                    <h2>Enviar</h2>
                </ModalHeader>
                <ModalBody>
                   <p>Senha:</p>
                   <Input value={senha}></Input>
                   <p>Mensagem:</p>
                   <textarea value={mensagem} onChange={(e)=>setMensagem(e.target.value)} style={{borderRadius:'10px',borderColor:'darkgray'}} name="" id="" cols="30" rows="10" className="w-100 p-2 input" />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={saveMensagem}>Enviar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default ModalMessage