import React from 'react';
import './Caroussel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Anel from '../assets/Carrossel_Anel.png'
import Brinco from '../assets/Carrossel_Brinco.png'
import Colar from '../assets/Carrossel_Colar.png'
import Piercing from '../assets/Carrossel_Piercing.png'
import Pingente from '../assets/Carrossel_Pingente.png'
import Pulseira from '../assets/Carrossel_Pulseira.png'

const data = [
    { src: Anel, title: 'Anéis', link: 'aneis' },
    { src: Brinco, title: 'Brincos', link: 'brincos' },
    { src: Colar, title: 'Colares', link: 'colares' },
    { src: Piercing, title: 'Piercings', link: 'piercings' },
    { src: Pingente, title: 'Pingentes', link: 'pingentes' },
    { src: Pulseira, title: 'Pulseiras', link: 'pulseiras' }
]

export const Caroussel = () => {
    return (
        <div className="caroussel-wrapper">
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev'
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    399: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}

                loop={{ loop: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((d) => (
                    <SwiperSlide key={d.src}>
                        <div className="itemm">
                            <Link to={d.link}><img src={d.src} alt={d.title} className="w-[150px] h-auto object-contain" /></Link>
                            <p>{d.title}</p>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-button-prev">
                <p>
                    ‹
                </p>
            </div>
            <div className="custom-swiper-button-next">
                <p>
                    ›
                </p>
            </div>
        </div>
    );
}
