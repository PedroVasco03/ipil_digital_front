import React from "react";
import {validatePassword} from "./utils/regex"
import style from "../../css/Login.module.css"

function PasswordBox(){
    const [senha, setSenha] = React.useState('');
    const [senhaErr, setSenhaErr] = React.useState(false);
    
    const validate = () => {
        if(!validatePassword.test(senha)){
            setSenhaErr(true)
        }else{
            setSenhaErr(false)
        }
    }
    return(
        <>
            <div className={style.input_field +" "+style.div}>
                <i className={"bi-lock-fill "+style.i}></i>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha"
                    className={style.input}
                    maxLength={8}
                    value={senha}
                    onChange={
                            (event) => {
                            setSenha (event.target.value)
                            setSenhaErr(false)}
                    } 
                    onBlur={validate}
                    required={true}
                />
            </div>
            {senhaErr && <p>A senha deve incluir:
                            8 dígitos , incluíndo uma letra maiúscula e um número
                        </p>}
        </>
    )
    var erroS = new Senha(senhaErr);
}

export default PasswordBox