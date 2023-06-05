import Head from "next/head";
import styleGeral from '../css/logado.module.css'
import NavBarSecretaria from "./navbar"
import SideBarSecretaria from "./sidebar"
function SettingsSecretaria(){
    return (
        <div>
            <Head>
                <title>SECRETARIA | Definicoes</title>
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
export default SettingsSecretaria