import React from "react";
import style from '../css/logarComo.module.css';
import NavBarAluno from "./navbar";
import Head from "next/head";

const Main = () => {
    return(
        <> 
        <Head>
            <title>Entrar como ?</title>
        </Head>
        <NavBarAluno/>
        <div className={style.hero}>
            
            <video src={require('../assets/fundo.mp4')} autoPlay loop muted className={style.back_video}/>
            <div className={style.content}>
                <h1 className={style.h1}>Entrar como?</h1>
                <div className={style.flex}>
                   <a href="/login/aluno/LoginAluno" className={style.a}>Aluno</a>
                    <a href="/login/coordenacao/login" className={style.a}>Coordenador</a>
                    <a href="/login/director/login" className={style.a}>Director</a>
                    <a href="/login/encarregado/login" className={style.a}>Encarregado</a>
                    <a href="/login/funcionario/login" className={style.a}>Funcionário</a> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Main;