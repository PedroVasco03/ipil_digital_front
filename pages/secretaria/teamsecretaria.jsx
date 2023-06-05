import styleGeral from '../css/logado.module.css'
import Head from "next/head"
import NavBarSecretaria from "./navbar"
import SideBarSecretaria from "./sidebar"
function TeamSecretaria(){
    return (
        <div>
            <Head>
                <title>SECRETARIA | Pessoal</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarSecretaria></NavBarSecretaria>
            <div className={styleGeral.container}>
                <SideBarSecretaria></SideBarSecretaria>
                <div className={styleGeral.content}> 
                </div>
            </div>
        </div>
    );
}
export default TeamSecretaria