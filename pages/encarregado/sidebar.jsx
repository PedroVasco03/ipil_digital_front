import Image from 'next/image'
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import init from '../../public/images/images-system/home.png'
import chat from '../../public/images/images-system/chat.png'
import coord from '../../public/images/images-system/coordenator.png'
import set from '../../public/images/images-system/settings.png'
import exit from '../../public/images/images-system/exit.png'

function SideBarAluno(){
    return(
        <>
        <nav className={styleSide.side+" "+styleGeral.side}>
                <ul className={styleSide.ul}>
                    <li className={styleSide.li}><a href="/encarregado/home" className={styleSide.a}> 
                        <Image className={styleSide.i} src={init} alt='inicio'/>
                        <span className={styleSide.side_item+" "+styleSide.span}>Início</span>
                    </a></li>
                    <li className={styleSide.li}><a href="/encarregado/chat" className={styleSide.a}>
                        <Image className={styleSide.i} src={chat} alt='Chat'/>
                        <span className={styleSide.side_item+" "+styleSide.span}>Chat</span>
                    </a></li>
                    <li className={styleSide.li}><a href="/encarregado/service" className={styleSide.a}>
                        <Image className={styleSide.i} src={coord} alt='Coordenação'/>
                        <span className={styleSide.side_item+" "+styleSide.span}>Serviços</span>
                    </a></li>
                    <li className={styleSide.li}><a href="/encarregado/settings" className={styleSide.a}>
                        <Image className={styleSide.i} src={set} alt='Definições' />
                        <span className={styleSide.side_item+" "+styleSide.span}>Definições</span>
                    </a></li>
                    <li onClick={()=>{localStorage.removeItem("encarregadoData")}} className={styleSide.li}><a href="/login/encarregado/login" className={styleSide.a+" "+styleSide.logout}>
                        <Image className={styleSide.i } src={exit} alt='Sair' />
                        <span className={styleSide.side_item+" "+styleSide.span}>Sair</span>
                    </a></li>
                </ul>
            </nav>
        </>
    )
}

export default SideBarAluno