import React from "react";
import style from "../../css/Login.module.css"

function AreaBox(){
    const [area, setArea] = React.useState('');
    return(
        <>
            <div className={style.input_field +" "+style.div}>
                <i className={"bi-text-paragraph "+ style.i}></i>
                <select
                    value={area} 
                    className= {style.select+" "+style.input}
                    onChange={({target}) => setArea (target.value)} 
                    id="area"
                >
                    <option disabled value="">Selecione a área</option>
                    <option value="construcao_civil">Construção Civil</option>
                    <option value="eletricidade">Eletricidade</option>
                    <option value="informatica">Informática</option>
                    <option value="mecanica">Mecanica</option>
                    <option value="quimica">Química</option>
                    required={true}
                </select>
            </div>
        </>
    )
}

export default AreaBox