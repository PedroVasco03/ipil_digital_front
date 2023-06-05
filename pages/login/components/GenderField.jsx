import React from "react";

function GenderField(){
    const [sexo, setSexo] = React.useState('');
    function handleChangue({target}){
        setSexo(target.value);
    }
    return(
        <>
                <div className="gender-field div"  onChange={(event) => setSexo (event.target.value)}>
                    <p>Sexo</p>
                    <div className="radio-field div" >
                        <label htmlFor="masculino" >Masculino</label>
                        <input 
                            type="radio" 
                            value="masculino"
                            id="masculino"
                            className="input"
                            checked={sexo === 'masculino'}
                            onChange={handleChangue}
                        />
                        <label htmlFor="feminino">Feminino</label>
                        <input 
                            type="radio" 
                            id="feminino"
                            value="feminino"
                            className="input"
                            checked={sexo==='feminino'}
                            onChange={handleChangue}
                        />
                    </div>
                </div>
            {sexo}
        </>
    )
}

export default GenderField