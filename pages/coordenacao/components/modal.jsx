import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
const listDay = []
const data = []
function ModalComponent({show, closed}){
    const [inicio, setInicio] = useState('7:00')
    const [fim, setFim] = useState('7:00')
    const [limite, setLimit] = useState(0)
    const [item, setItem] = useState({})
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        getUsers()
        getDataCoordenador()
     },[])
     const getDataCoordenador = ()=>{
         const dado =JSON.parse(localStorage.getItem('coordenadorData'))
         setItem(dado)
     }
     const getUsers = async ()=>{
         const response = await axios.get('http://localhost:5000/horario-coordenacao')
         .then((response)=>{
             console.log('buscando dados no banco de dados')
             setDatas(response.data)
         })
         .catch(()=>console.log('erro: solicitação negada'))
         
         
     }
     
   const saveData = async (e)=>{
        e.preventDefault()
        try{
        
            const dado = JSON.parse(localStorage.getItem('coordenadorData'))
            const search = datas.filter((data)=> data.idcoordenador === dado.id)
            search.map(async (item)=>{
               await axios.delete(`http://localhost:5000/horario-coordenacao/${item.id}`)
            })
            alert('horario salvo com sucesso')
            listDay.map(async (diasemana)=>{
        
                await axios.post('http://localhost:5000/horario-coordenacao',{
                idcoordenador: item.id,
                diasemana,
                inicio,
                fim,
                limite
            })
        })
       localStorage.setItem('horario-coordenacao', vector)
         
              
           
           
        }catch(error){
            console.log(error)
        }
    }
    const diaSemana = ['Segunda','Terça','Quarta','Quinta','Sexta']
    const [check, setCheck] =useState(
        new Array(diaSemana.length).fill(false)
    )
    
    const setDay = (item, index)=>{
        if(!check[index]){
            listDay.push(item)
            console.log(listDay)
        }
        else{
            const number = listDay.indexOf(item)
            listDay.splice(number, 1)
            console.log(listDay)
        }
    }
    const handleOnChange = (position)=>{
        const updateCheck = check.map((item, index)=>{
            if(position === index){
                return !item
            }
            else{
                return item
            }
        })
        setCheck(updateCheck)
        console.log(updateCheck)
    }
    const hora = ['7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00']
    return(
        <div>
            <Modal isOpen={show} onClosed={closed}>
                <ModalHeader toggle={closed}>
                    <h2>Horário de Atendimento</h2>
                </ModalHeader>
                <Form onSubmit={saveData}>
                <ModalBody>
                    <Label>Dia de atendimento:</Label>
                    {diaSemana.map((item, index)=>{
                        return(
                            <FormGroup key={index}>
                                <Label className="mx-1">{item}</Label> 
                                <Input id="diasemana" name="diasemana" value={index + 1} checked={check[index]} onChange={()=>handleOnChange(index)} onClick={()=>{setDay(item, index)}} type="checkbox" className="mx-1"></Input> 
                            </FormGroup>
                        )
                    })}
                    <Label for="hora-inicio">Hora de atendimento início:</Label>
                    <Input id="hora-inicio" type="select" name="hora-inicio" value={inicio} onChange={(e)=>setInicio(e.target.value)}>
                    {hora.map((item, index)=>{
                        return(
                            <option key={index + 1} value={item}>{item}</option>
                        )
                    })}
                    </Input>
                    <Label for="hora-fim">Hora de atendimento fim:</Label>
                    <Input id="hora-fim" type="select" name="hora-fim" value={fim} onChange={(e)=>setFim(e.target.value)}>
                    {hora.map((item, index)=>{
                        return(
                            <option key={index} value={item} onChange={()=>setFim(item)}>{item}</option>
                        )
                    })}
                    </Input>
                   <Label for="limite">Limite de Pessoas:</Label>
                   <Input id="limite" value={limite} onChange={(e)=>setLimit(e.target.value)} type="number" name="limite"/>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color='primary'>Criar</Button>
                </ModalFooter>
            </Form>
            </Modal>
        </div>
    )
}
export default ModalComponent