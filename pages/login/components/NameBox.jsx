import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import { validateName } from "./utils/regex";
import style from "../../css/Login.module.css"

function deteta (e){
    const Code = (e.charCode ? e.charCode : e.wich);
    if(Code > 40 && Code <=62){
        e.preventDefault()
    }
}

function NameBox(){
    const [nome, setNome] = React.useState('');
    const [nomeErr, setNomeErr] = React.useState('');

    const validate = () => {
        if(!validateName.test(nome)){
            setNomeErr(true)
        }else{
            setNomeErr(false)
        }
    }
    

    return(
        <>
            <div className={style.input_field+" " +style.div}>
                <i className={"bi-person-fill "+style.i}></i>
                <input 
                    type="text" 
                    name="usernew" 
                    placeholder="Nome" 
                    className={style.input}
                    value={nome}
                    id="nome"
                    onKeyPress={deteta  }
                    onChange={
                        (event) => {
                        setNome (event.target.value)
                        setNomeErr(false)
                        }
                    } 
                onBlur={validate}
                required={true}
                />
            </div>
            {nomeErr && <p>Por favor digite nome válido</p>}
        </>
    )
}

export default NameBox