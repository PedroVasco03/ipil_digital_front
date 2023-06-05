import Image from 'next/image'
import what from '../../public/images/initial.png'
import style from '../css/services.module.css'
import style2 from '../css/whats.module.css'
import Fade from 'react-reveal'
const WhatIs = ()=>{
    return( 
        <div className='container-fluid p-2 '>
            <Fade top>
                <h2  className={style.title}>O que é o IPILDIGITAL?</h2>
            </Fade>
            <div className={style2.container_sobre+' w-100'}>
                <Fade left cascade >
                    <div className={style2.text}>
                        <p>
                            IPILDIGITAL é um sistema que permite melhorar o funcionamento da escola tornando os trabalhos totalmente digitais. 
                        </p>
                        <p> Porquê o nome <b>IPIL DIGITAL</b> ?  Este nome indica que o nosso sistema é voltado inicialmente ao nosso instituto, procurado tornar os serviços oferecidos pelo mesmo mais digitais possíveis.</p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={style2.imgCont}>
                        <Image className={style.img_sobre}  src={what} alt={'o que é o IPILDIGITAL'} />
                    </div>
                </Fade>
                
                    
            </div>
            
        </div>
    )
}

export default WhatIs