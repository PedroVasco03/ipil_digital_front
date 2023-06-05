import React from "react";
import style from "../../css/Login.module.css"

function DegreBox(){
    const [classe, setClasse] = React.useState('');
    return(
        <>
            <div className={style.input_field+" "+ style.div}>
                <i className={"bi-text-indent-right "+style.i}></i>
                    <select name="classe" className={style.select+ " "+ style.input} value={classe} onChange={(event) => setClasse (event.target.value)}>
                        <option disabled value="">Selecione a classe</option>
                        <option value="10">10ª classe</option>
                        <option value="11">11ª classe</option>
                        <option value="12">12ª classe</option>
                        <option value="13">13ª classe</option>
                        required={true}
                    </select>
                </div>
        </>
    )
}

export default DegreBox