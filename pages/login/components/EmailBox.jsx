import React from "react";
import {validateEmail} from "./utils/regex"
import style from "../../css/Login.module.css"
function EmailBox(){
    const [email, setEmail] = React.useState('');
    const [emailErr, setEmailErr] = React.useState(false);

    const validate = () => {
        if(!validateEmail.test(email)){
            setEmailErr(true)
        }else{
            setEmailErr(false) 
        }
    }

    return(
        <>
            <div className={style.input_field + " " +style.div}>
                <i className={"bi-envelope-fill"+" "+ style.i}></i>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    className={style.input}
                    value={email}
                    onChange={(event) =>{ 
                        setEmail(event.target.value)
                        setEmailErr(false)
                    }}
                    onBlur={validate}
                    required={true}
                />
            </div>
            {emailErr && <p>Por favor  digite um email válido</p>}
        </>
    )
}


export default EmailBox