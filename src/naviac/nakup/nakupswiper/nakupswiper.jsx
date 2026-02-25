import './nakupswiper.css'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Nakupswiper = ({ data, children,fotky,tu ,onClick}) => {

  const swiperRef = useRef(null);

  return (
    <div className='Nakupswiper2222'>
      <div className='okokjvnjvbhvbh'>{tu}</div>
      {children}

      <Swiper 
      
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  modules={[Navigation, Pagination, Autoplay, Mousewheel]}
  observer={true}
  observeParents={true}
  resizeObserver={true}
  spaceBetween={10}
  slidesPerView="auto"
  preventInteractionOnTransition={true}
  touchStartPreventDefault={true}
  touchMoveStopPropagation={true}
  mousewheel={{
    forceToAxis: true,
    releaseOnEdges: false,
    invert: false,
    sensitivity: 1,
  }}
>
  {fotky.map((item, index) => (
    <SwiperSlide key={index} style={{ width: 'auto', flex: '0 0 auto' }}>
      <div className='fotakkokokok' onClick={onClick}>
        <img  src={item} alt="" />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  )
}

export default Nakupswiper
