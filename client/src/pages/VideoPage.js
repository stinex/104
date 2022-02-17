import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Vid from '../img/vid.png'

export const VideoPage = () => {

    return (

        <div className='container__wrapper'>
            <div className="video">
                <div className="video__wrapper">
                    <Swiper
                        spaceBetween={70}
                        slidesPerView='auto'
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img src={Vid} alt="" />
                            <div className="information">
                                <div className="title">крылья</div>
                                <div className="year">2021</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Vid} alt="" />
                            <div className="information">
                                <div className="title">крылья</div>
                                <div className="year">2021</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Vid} alt="" />
                            <div className="information">
                                <div className="title">крылья</div>
                                <div className="year">2021</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Vid} alt="" />
                            <div className="information">
                                <div className="title">крылья</div>
                                <div className="year">2021</div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    )
}