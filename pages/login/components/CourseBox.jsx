import React from "react";
import style from "../../css/Login.module.css"

function CourseBox(){
    const [curso, setCurso] = React.useState('');
    return(
        <>
            <div className={style.input_field +" "+  style.div}>
                <i className={"bi-bar-chart-steps " + style.i}></i>
                    <select className={style.select+" "+style.input} name="curso" value={curso} onChange={(event) => setCurso (event.target.value)}>
                        <option className="option" disabled value="">Selecione o curso</option>
                        <option className="option" value="ii">Técnico de Infor. {"(II)"}</option>
                        <option className="option" value="ig">Técnico de G.S. Infor. {"(IG)"}</option>
                        required={true}
                    </select>
            </div>
        </>
    )
}

export default CourseBox