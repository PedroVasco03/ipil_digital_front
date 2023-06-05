import NavBarCoordenacao from "./navbar"
import styleGeral from '../css/logado.module.css'
import AccordionComponent from "./components/accordion"
import Head from "next/head"
import SideBarCoordenacao from "./sidebar"
import { AccordionBody, Button, Card, CardBody, Label } from "reactstrap"
import { useEffect } from "react"
import { useState } from "react"
function SettingsCoordenacao(){
    useEffect(()=>{
        getCoordenador()
        getData()
    },[])
    const [coordenador, setCoordenador] = useState([])
    const [data, setData] = useState({})
    const getCoordenador = async ()=>{
        const data = JSON.parse(localStorage.getItem('coordenadorData'))
        setCoordenador(data)
    }
    const getData = ()=>{
        const value = JSON.parse(localStorage.getItem('coordenadorData'))
        setData(value)
    }

    return data == null ? <div>
    <Head>
            <title>Não encontrado</title>
            <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
        </Head>
        <div className="d-flex justify-content-center p-4">
            <p className="display-4 m-4">Usuário não está logado!</p>
        </div>
    </div> : <div>
        <Head>
            <title>COORDENACAO | Definicoes</title>
            <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
        </Head>
        <NavBarCoordenacao/>
        <div className={styleGeral.container}>
            <SideBarCoordenacao/>
            <div className={styleGeral.content}>
                <div className="w-100 p-2">
                    <AccordionComponent title={'Dados Pessoais'}>
                        <AccordionBody>
                          <Card>
                            <CardBody>
                                <Label>Nome: {coordenador.nome}</Label>
                                <br />
                                <Label>Email: {coordenador.email}</Label>
                                <br />
                                <Label>Telefone: {coordenador.telefone}</Label>
                                <br />
                                <Label>Área: {coordenador.area}</Label>
                                <br />
                                <Label>Senha: {coordenador.senha}</Label>
                                <br />
                                <Label>Sexo: {coordenador.sexo}</Label>
                                <br />
                                <Button color="primary" style={{float:'right'}}>Editar</Button>
                            </CardBody>
                          </Card> 
                        </AccordionBody>
                    </AccordionComponent>
                </div>
                <div className="w-100 p-2">
                    <AccordionComponent title={'Folhas de pagamento'}>
                        <AccordionBody>
                            <Card className="w-100">
                                <CardBody>
                                     folha de pagamento
                                </CardBody>
                            </Card>
                        </AccordionBody>
                    </AccordionComponent>
                </div>
                <div className="w-100 p-2">
                    <AccordionComponent title={'Conta'}>
                        <AccordionBody>
                           <Card>
                                <CardBody>
                                    Eliminar Conta
                                </CardBody>
                           </Card>
                        </AccordionBody>
                    </AccordionComponent>
                </div>
                </div>    
        </div>
    </div>;
}
export default SettingsCoordenacao