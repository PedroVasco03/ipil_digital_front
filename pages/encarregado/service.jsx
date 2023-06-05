import NavBarCoordenacao from "./navbar"
import Head from "next/head"
import styleGeral from '../css/logado.module.css'
import SideBarCoordenacao from "./sidebar"

function TeamCoordenacao(){
    return (
        <div>
            <Head>
                <title>SECRETARIA | Pessoal</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarCoordenacao/>
            <div className={styleGeral.container}>
                <SideBarCoordenacao/>
                <div className={styleGeral.content}>

                </div>
            </div>


        </div>
    );
}
export default TeamCoordenacao