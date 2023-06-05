import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from "reactstrap"
import Head from "next/head"
import styleGeral from '../css/logado.module.css'
import NavBarAluno from "./navbar"
import SideBarAluno from "./sidebar"

function AgendAluno(){
    const diaSemana = ['Segunda','Terça','Quarta','Quinta','Sexta']
    const hora = ['7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00']
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
                    <FormGroup>
                        <Label>Reclamação para:</Label>
                        <Input type="select">
                        <option>Coordenação</option>
                        <option>Secretária</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <label>Senha:</label>
                        <Input readOnly></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="attend">Dia de Semana:</Label>
                        <Input id="attend" type="select">
                            {diaSemana.map((item, index)=>{
                            return(
                                    <option key={index} value={index}>{item}</option>
                                )
                            })}
                        </Input> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="attend">Hora de Atendimento:</Label>
                        <Input id="attend" type="select">
                            {hora.map((item, index)=>{
                                return(
                                    <option key={index} value={index}>{item}</option>
                                    )
                                })}
                        </Input> 
                    </FormGroup>
                    <FormGroup>
                            <Label>Informação:</Label>
                            <Input type='textarea' style={{}}></Input>
                    </FormGroup>
                    <FormGroup>
                            <Button color="primary" className="m-2">Agendar</Button>
                            <Button color="primary" className="m-2">Ver Agendados</Button>
                    </FormGroup>
                </div>
            </div>
        </div>
    </div>
    );
}
export default AgendAluno