import Image from "next/image"
import empty from '../../public/images/images-system/empty.png'
import { Button } from "reactstrap"
import Head from "next/head"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import NavBarAluno from "./navbar"
import SideBarAluno from "./sidebar"
import styleChat from '../css/chat.module.css'
import i1 from "../../public/images/logotipo.png"
import i2 from "../../public/images/student.jpg"

function ChatAluno(){
    return (
        <div>
            <Head>
                <title>Funcionario | Chat</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarAluno></NavBarAluno>
            <div className={styleGeral.container}>
                <SideBarAluno/>
                <div className={styleChat.content}>
                    <div className={"col-md-4 col-xl-3 "+styleChat.chat_nomes}>
                        <div className={styleChat.card+" card mb-sm-3 mb-md-0 "+styleChat.contacts_card}>
                            <div className={"card-header "+styleChat.card_header}>
                                <span>Chats</span>
                            </div>
                            <div className={"card-body "+ styleChat.contacts_body}>
                                <ui className={styleChat.contacts}>
                                    <li className={styleChat.active}>
                                        <div className="d-flex">
                                            <div className={styleChat.img_cont}>
                                                <Image className={"rounded-circle "+styleChat.user_img} src={i1}/>
                                                <span className={styleChat.online_icon}></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex ">
                                            <div className={styleChat.img_cont}>
                                                <Image className={"rounded-circle "+styleChat.user_img} src={i2}/>
                                                <span className={styleChat.online_icon+" "+styleChat.offline}></span>
                                            </div>
                                        </div>
                                    </li>
                                </ui>
                            </div>
                        </div>
                        <div className="card-footer"></div>
                    </div>
                    <div className={"col-md-8 col-xl-6 "+styleChat.chat_mensagens}>
                        <div className={styleChat.card+" card "+styleChat.chat_card}>
                            <div className={"card-header mb-2 "+styleChat.msg_head}>
                                <div className={"d-flex bd-highlight"}>
                                    <div className={styleChat.img_cont}>
                                        <Image className={"rounded-circle "+styleChat.user_img} src={i1}/>
                                        <span className={styleChat.online_icon}></span>
                                    </div>
                                    <div className={styleChat.user_info}>
                                        <span>Coordenação de Informática</span>
                                        <p>Informe aqui a sua questão</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"card-body "+styleChat.msgcard_body}>
                                <div className="d-flex justify-content-start mb-5">
                                    <div className={styleChat.img_cont_msg}>
                                        <Image className={"rounded-circle "+styleChat.user_img_msg} src={i1}/>
                                    </div>
                                    <div className={styleChat.msg_cotainer +" "+styleChat.msg}>
                                        Bom dia, informe a sua questão
                                        <span className={styleChat.msg_time}>8:40 AM, Hoje</span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mb-5">
                                    <div className={styleChat.msg_cotainer_send +" "+styleChat.msg}>
                                        Sou uma possivel nova estudante quero conhecer os cursos?
                                        <span className={styleChat.msg_time_send}>8:55 AM, Hoje</span>
                                    </div>
                                    <div className={styleChat.img_cont_msg}>
                                        <Image className={"rounded-circle "+styleChat.user_img_msg} src={i2}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styleChat.card_footer}>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className={"input-group-text "+styleChat.attach_btn}> <i className="bi-paperclip"></i></span>
                                    </div>
                                    <textarea className={"form-control "+styleChat.type_msg} placeholder="Escreva a sua mensagem..."></textarea>
                                    <div className="input-group-append">
                                        <span className={"input-group-text "+styleChat.send_btn}> <i className="bi-send-fill"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatAluno