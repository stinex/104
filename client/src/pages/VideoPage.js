import { useState, useEffect, useCallback } from "react"
import { useHttp } from "../hooks/http.hook"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import "swiper/css/navigation"
import { YouTube } from "../components/modals/YouTube"

export const VideoPage = () => {
    const [data, setData] = useState([])
    const { request } = useHttp()

    const fatchConcerts = useCallback(async () => {
        try {
            const fatched = await request('/api/video', 'GET', null, {
            })
            setData(fatched)
        } catch (e) { }
    }, [request])

    useEffect(() => {
        fatchConcerts()
    }, [fatchConcerts, request])


    const [modalActive, setModalActive] = useState(false)
    const [link, setLink] = useState('')
    const openModal = (e) => {
        setModalActive(true)
        setLink(e.target.attributes[2].value)
    }

    return (
        <div className="video">
            <div className="video__wrapper">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={70}
                    slidesPerView='auto'
                    navigation
                >
                    {data.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={item.img} alt="" onClick={e => openModal(e)} data-link={item.link} className="video__iframe" />
                                <div className="information">
                                    <div className="title">{item.name}</div>
                                    <div className="year">{item.year}</div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <div className='container__wrapper'>
                    <div className='mobile__video'>
                        {data.map((item, i) => {
                            return (
                                <div key={i} className='item'>
                                    <img src={item.img} onClick={e => openModal(e)} data-link={item.link} alt="" />
                                    <div className="information">
                                        <div className="title">{item.name}</div>
                                        <div className="year">{item.year}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {<YouTube active={modalActive} setActive={setModalActive} linkVideo={link} />}

        </div>
    )
}