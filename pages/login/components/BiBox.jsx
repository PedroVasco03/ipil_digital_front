import React from "react";
import style from "../../css/Login.module.css"
import { validateBi } from "./utils/regex"; 

function BiBox(){
    const [numbi, setNumBi] = React.useState('');
    const [biErr, setBiErr] = React.useState('');

    const validate = () => {
        if(!validateBi.test(numbi)){
            setBiErr(true)
        }else{
            setBiErr(false)
        }
    }
    return(
        <>
            <div className={style.input_field +" "+style.div}>
                <i className={"bi-card-heading "+ style.i}></i>
                <input 
                    type="text" 
                    name="binew" 
                    className={style.input}
                    placeholder="Bilhete de identidade" 
                    maxLength={14}
                    value={numbi}
                    onChange={
                        (event) => {
                        setNumBi (event.target.value) 
                        setBiErr(false)
                    }
                    }
            onBlur={validate}
            required={true}
            />
        </div>
        {biErr && <p>Por favor digite numero do bilhete válido</p>}
        </>
    )
}

export default BiBox