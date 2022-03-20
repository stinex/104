/* eslint-disable no-restricted-globals */

import { useState, useEffect, useCallback, useRef } from "react"
import { useHttp } from "../hooks/http.hook"
import { Helmet } from 'react-helmet'

import Aos from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';

export const TracksPage = () => {
    const [data, setData] = useState([])
    const { request } = useHttp()

    const fatchConcerts = useCallback(async () => {
        try {
            const fatched = await request('/api/track', 'GET', null, {
            })
            setData(fatched)
        } catch (e) { }
    }, [request])

    useEffect(() => {
        fatchConcerts()
    }, [fatchConcerts, request])



    const imgRef = useRef([])
    imgRef.current = []

    const addRef = (el) => {
        if (el && !imgRef.current.includes(el)) {
            imgRef.current.push(el)
        }
    }



    useEffect(() => {
        const animItems = document.querySelectorAll('._anim-items')
        if (animItems.length > 0) {
            window.addEventListener('scroll', function () { setTimeout(animOnScroll, 1500) })

            function animOnScroll() {
                setTimeout(() => {
                    for (let index = 0; index < animItems.length; index++) {
                        const animItem = animItems[index],
                            animItemHeight = animItem.offsetHeight,
                            animItemOffset = offset(animItem).top,
                            animStart = 4
                        console.log(animItemOffset)

                        let animItemPoint = window.innerHeight - animItemHeight / animStart

                        if (animItemHeight > window.innerHeight) {
                            animItemPoint = window.innerHeight - window.innerHeight / animStart
                        }

                        if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                            animItem.classList.add('_active')
                        } else {
                            if (index !== 0)
                                animItem.classList.remove('_active')
                        }
                    }

                })
            }
            function offset(el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
            }
            setTimeout(() => {
                animOnScroll()
            }, 500)
        }
    })
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Helmet>
                <title>Треки</title>
            </Helmet>
            <div className='container__wrapper'>
                <div className="tracks">
                    {
                        data.reverse().map((item, i) => {
                            return (

                                <div key={i} className="track">
                                    <div className="type" data-aos='fade-up'>
                                        {item?.type}
                                    </div>
                                    <div className="name" data-aos='fade-up'>
                                        {item?.name}
                                    </div>
                                    <div data-aos='fade-up' className="links_blocks">
                                        <span >слушать:</span>
                                        <div className="music__venuea">

                                            {item.url_spotify === '' ? '' :
                                                <a href={item.url_spotify} target='_blank' className="Spotify" rel="noreferrer">
                                                </a>
                                            }
                                            {item.url_vk_music === '' ? '' :
                                                <a href={item.url_vk_music} target='_blank' className="vkMusic" rel="noreferrer">
                                                </a>
                                            }
                                            {item.url_itunes === '' ? '' :
                                                <a href={item.url_itunes} className="AppleMusic" >
                                                </a>
                                            }
                                            {item.url_yandex_music === '' ? '' :
                                                <a href={item.url_yandex_music} target='_blank' className="YandexMusic" rel="noreferrer">
                                                </a>
                                            }

                                        </div>
                                    </div>
                                    <img className='cover _anim-items' ref={addRef} src={item?.img} alt="" />
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}