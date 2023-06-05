import React from "react";
import style from "../../css/Login.module.css"

function ClassBox(){
    const [turma, setTurma] = React.useState('');
    return(
        <>
            <div className={style.input_field+" "+style.div}>
                <i className={"bi-person-lines-fill "+style.i}></i>
                    <select name="turma" className={style.select+" "+style.input} value={turma} onChange={(event) => setTurma (event.target.value)}>
                        <option disabled value="">Selecione a turma</option>
                        <option value="...">...</option>
                        required={true}
                    </select>
            </div>
        </>
    )
}

export default ClassBox