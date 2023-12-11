import React, { useEffect } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import {Navigation} from 'swiper';
import styles from './Carousel.module.css'
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRightNavigation from'./CarouselRightNavigation/CarouselRightNavigation'


const Controls=({data})=>{
    const swiper =useSwiper();
    useEffect(()=>{
        swiper.slideTo(0,1);
    },[data])
    return<></>
}
function Carousel({data,renderComponent}) {
  console.log('CarouselData :',data)
  //sharan here
  return (
    <div className={styles.wrapper}>
    <Swiper 
    styles={{padding:'0px 20px'}}
    initialSlide={0}
    modules={[Navigation]}
    slidesPerView={'auto'}
    spaceBetween={40}
    allowTouchMove
    >
    <Controls data={data}/>
    <CarouselLeftNavigation/>
    <CarouselRightNavigation/>
    {data.map((ele) => (
    <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
))}
    </Swiper>
    </div>
  )
}

export default Carousel;