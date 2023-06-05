import Image from 'next/image'
import style from '../../css/carousel.module.css'
import carousel from '../../../public/images/carousel3.png'
const CarouselItem3 = (props)=>{
    return(
        <div id={style.bgCarousel3} className={'container-fluid align-items-center '+ style.height}>
           <div className={'container '+style.carouselItem}>
            <div className={style.content}>
                    <div className={'p-5 py-4 px-5'}>
                            <h2 className={'display-2 text-white'} style={{fontWeight: 'bold'}}>{props.title}</h2>
                            <p className={'text-white bold'} style={{fontSize:'2rem'}}>Faça Marcações Online</p>
                    </div>
                </div>
                <div className={style.ContainerImage}>
                    <Image className={style.imagem} src={carousel} alt='logotipo' width={600} style={{
                        float:'right'}} />
                </div>
            </div>
        </div>
    )
}
export default CarouselItem3