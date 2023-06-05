import Head from 'next/head'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login/bootstrap-icons-1.9.1/bootstrap-icons.css'
import './css/style.css'
import { useEffect } from 'react';
function MyApp({Component, pageProps}){
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.js');
    },[])
    return(

        <>
            <Component {...pageProps}/>
        </>       
    )
}
export default MyApp
