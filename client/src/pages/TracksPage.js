
import { useState, useEffect, useCallback } from "react"
import { useHttp } from "../hooks/http.hook"
import AppleMusic from '../img/apple-music.png'
import Spotify from '../img/spotify.png'
import vkMusic from '../img/vk-music.png'
import YandexMusic from '../img/yandex-music.png'
import { Helmet } from 'react-helmet'

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

    return (
        <>
            <Helmet>
                <title>Треки</title>
            </Helmet>
            <div className='container__wrapper'>
                <div className="tracks">
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className="track">
                                    <div className="type">
                                        {item?.type}
                                    </div>
                                    <div className="name">
                                        {item?.name}
                                    </div>
                                    <span>слушать:</span>
                                    <div className="music__venuea">

                                        {item.url_spotify === '' ? '' :
                                            <a href={item.url_spotify} target='_blank' className="Spotify" rel="noreferrer">
                                                <img src={Spotify} alt="" />
                                            </a>
                                        }
                                        {item.url_vk_music === '' ? '' :
                                            <a href={item.url_vk_music} target='_blank' className="vkMusic" rel="noreferrer">
                                                <img src={vkMusic} alt="" />
                                            </a>
                                        }
                                        {item.url_itunes === '' ? '' :
                                            <a href={item.url_itunes} className="AppleMusic">
                                                <img src={AppleMusic} alt="" />
                                            </a>
                                        }
                                        {item.url_yandex_music === '' ? '' :
                                            <a href={item.url_yandex_music} target='_blank' className="YandexMusic" rel="noreferrer">
                                                <img src={YandexMusic} alt="" />
                                            </a>
                                        }

                                    </div>

                                    <img className='cover' src={item?.img} alt="" />
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}