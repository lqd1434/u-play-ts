import React from 'react';
import SwiperCore, {
 Navigation, Pagination, EffectCube, Autoplay,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../static/images/back1.jpg';
import img2 from '../../static/images/bg2.jpg';
import img3 from '../../static/images/bg5.jpg';
import img4 from '../../static/images/bg3.jpg';
import img5 from '../../static/images/bg25.jpg';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, EffectCube, Autoplay]);
export const Home = () => {
	const pagination = {
		clickable: true,
		el: '#po',
		renderBullet(index, className) {
			console.log(className);
			return `<span class="${className}">${index + 1}</span>`;
		},
	};
	return (
		<div className="u-home">
			<Swiper
				effect="cube"
				loop
				grabCursor
				preloadImages
				updateOnImagesReady
				cubeEffect={{
							shadow: true,
							slideShadows: true,
							shadowOffset: 20,
							shadowScale: 0.94,
						}}
				navigation
				controller
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				className="mySwiper"
				pagination={pagination}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide><img src={img1} alt="" className="index-img" /></SwiperSlide>
				<SwiperSlide><img src={img2} alt="" className="index-img" /></SwiperSlide>
				<SwiperSlide><img src={img3} alt="" className="index-img" /></SwiperSlide>
				<SwiperSlide><img src={img4} alt="" className="index-img" /></SwiperSlide>
				<SwiperSlide><img src={img5} alt="" className="index-img" /></SwiperSlide>
			</Swiper>
			<div id="po" />
		</div>
	);
};
