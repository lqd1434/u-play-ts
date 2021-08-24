import React from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import img1 from '../../static/images/back1.jpg'
import img2 from '../../static/images/bg2.jpg'
import img3 from '../../static/images/bg5.jpg'
import img4 from '../../static/images/bg16.jpg'
import img5 from '../../static/images/bg25.jpg'

SwiperCore.use([Pagination, Autoplay])
const IndexSwiper = () => {
    const pagination = {
        clickable: true,
        el: '#pagination-container',
        renderBullet(index: number, className: any) {
            return `<span class="${className}">${index + 1}</span>`
        },
    }

    return (
        <div className="mySwiper-container">
            <Swiper
                loop
                grabCursor
                lazy
                slidesPerView={1}
                preloadImages
                updateOnImagesReady
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mySwiper"
                pagination={pagination}
            >
                <SwiperSlide>
                    <img src={img1} alt="" className="index-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" className="index-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" className="index-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" className="index-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" className="index-img" />
                </SwiperSlide>
            </Swiper>
            <div id="pagination-container" />
        </div>
    )
}
export default IndexSwiper
