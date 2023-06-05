import React from "react";
import style from "../../css/Login.module.css"

function ButtonConfirm ({value}){
    return <input type="submit" value={value}  className={style.btn+" "+ style.solid+" "+ style.input}/>
}

export default ButtonConfirm