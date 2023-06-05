import React from "react";
import { validateTelefone } from "./utils/regex";
import style from "../../css/Login.module.css"

function deteta (e){ 
    const Code = (e.charCode ? e.charCode : e.wich);
    if(Code < 40 || Code > 58){
        e.preventDefault()
    }
}

function PhoneBox(){
    const [telefone, setTelefone] = React.useState('');
    const [telefoneErr, setTelefoneErr] = React.useState('');

    const validate = () => {
        if(!validateTelefone.test(telefone)){
            setTelefoneErr(true)
        }else{
            setTelefoneErr(false)
        }
    }

    return(
        <>
            <div className={style.input_field+" " +style.div}>
                <i className={"bi-phone-fill "+style.i}></i>
                <input 
                    type="text" 
                    name="mailnew" 
                    placeholder="Telefone"
                    className={style.input}
                    maxLength={11}
                    minLength={9}
                    value={telefone}
                    onKeyPress={deteta}
                    onChange={
                        (event) => {
                        setTelefone (event.target.value)
                        setTelefoneErr(false)
                        }
                    }
                    onBlur={validate}
                    required={true}
                />
            </div>
            {telefoneErr && <p>Por favor digite número válido EX: "999-999-999"</p>}
        </>
    )
}

export default PhoneBox