import './nakupswiper.css'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Nakupswiper = ({ data, children }) => {
  const kkkkk = data.apartman.fotky;
  const swiperRef = useRef(null);

  return (
    <div className='Nakupswiper'>
      {children}

      <Swiper
        className='moznnononono'
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
        {kkkkk.map((prev, index) => (
          <SwiperSlide
          style={{ width: '200px', height: '180px' }} // pevná šírka slideu
            key={prev.id}
           
          >
            <img src={prev} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Nakupswiper
