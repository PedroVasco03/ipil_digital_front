import React from "react"
import style from "../../css/Login.module.css"
import imagem1 from "../images/undraw_mobile_messages_re_yx8w.svg"
import imagem2 from "../images/undraw_working_re_ddwy2.svg"
import SignInForm from "./components/SignInForm"
import SignUpForm from "../components/SignUpForm"
import Image from "next/image"

function Login() {
    const [css, setCss] = React.useState(null)
    function ss(){
     
     if(css===null) 
     setCss('Login_sign_up_mode__AAm_P')
     else 
     setCss(null)
     
     }
        return(
         <>
          <div className={style.cont_pai+" " + style.div}>
                 <div className={style.container+" " + style.div+" " + css}>
                     <div className={style.forms_container+" " + style.div}>
                         <div className={style.signin_signup +" "+ style.div}>
                             <SignInForm/>
                             <SignUpForm user="encarregado"/>
                         </div>
                     </div>
                     <div className={style.panels_container+" "+ style.div}>
                         <div className={style.panel+" " +style.left_panel +" "+style.div}>
                             <div className={style.content +" "+style.div}>
                                 <h3 className={style.h3}>Novo por aqui ?</h3>
                                 <p className={style.p}>
                                     Efetue agora o deu cadastro e venha conhecer conosco
                                     oque é o <b>IPIL Digital</b> um sistema feito a pensar em si. 
                                 </p>
                                 <button className={style.btn +" "+ style.transparent + " "+ style.button} id="sign-up-btn" onClick={ss} >Cadastrar-se</button>
                             </div>
                             <Image src={imagem1} className={style.image}/>
                         </div>
 
                         <div className={style.panel +" "+ style.right_panel+" "+ style.div}>
                             <div className={style.content +" " +style.div}>
                                 <h3 className={style.h3}>Um de nós ?</h3>
                                 <p className={style.p}>
                                     Efetue o login agora continue onde parou porque 
                                     o nosso sistema espera por ti, <b>IPIL Digital</b> Somos o futuro
                                 </p>
                                     <button className={style.btn+" " +style.transparent+" "+ style.button}  id="sign-in-btn" onClick={ss}>Entrar</button>
                             </div>
                             <Image src={imagem2} className={style.image}/>
                         </div>
                     </div>
                 </div>
             </div>
         </>)
}

export default Login