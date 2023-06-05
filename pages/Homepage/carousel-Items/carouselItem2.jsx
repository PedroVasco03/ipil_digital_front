import Image from 'next/image'
import style from '../../css/carousel.module.css'
import carousel from '../../../public/images/carousel2.png'
const CarouselItem2 = (props)=>{
    return(
        <div id={style.bgCarousel2} className={'container-fluid align-items-center '+ style.height}>
           <div className={'container '+style.carouselItem}>
            <div className={style.content}>
                    <div className={'p-5 py-4 px-5'}>
                            <h2 className={'display-2 text-white'} style={{fontWeight: 'bold'}}>{props.title}</h2>
                            <p className={'text-white bold'} style={{fontSize:'2rem'}}>Conheça o Chat Online</p>
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
export default CarouselItem2