import AppleMusic from '../img/apple-music.png'
import Spotify from '../img/spotify.png'
import vkMusic from '../img/vk-music.png'
import YandexMusic from '../img/yandex-music.png'
import { Helmet } from 'react-helmet'
import Lb from '../img/alb.png'

export const TracksPage = () => {
    return (
        <>
            <Helmet>
                <title>Треки</title>
            </Helmet>
            <div className='container__wrapper'>
                <div className="tracks">
                    <div className="track">
                        <div className="type">
                            Альбом
                        </div>
                        <div className="name">
                            Кино без сигарет
                        </div>
                        <span>слушать:</span>
                        <div className="music__venuea">
                            <a href="" target='_blank' className="Spotify">
                                <img src={Spotify} alt="" />
                            </a>
                            <a href="" target='_blank' className="vkMusic">
                                <img src={vkMusic} alt="" />
                            </a>
                            <a className="AppleMusic">
                                <img src={AppleMusic} alt="" />
                            </a>
                            <a href="" target='_blank' className="YandexMusic">
                                <img src={YandexMusic} alt="" />
                            </a>
                        </div>

                        <img className='cover' src={Lb} alt="" />
                    </div>

                    <div className="track">
                        <div className="type">
                            Альбом
                        </div>
                        <div className="name">
                            Кино без сигарет
                        </div>
                        <span>слушать:</span>
                        <div className="music__venuea">
                            <a href="" target='_blank' className="Spotify">
                                <img src={Spotify} alt="" />
                            </a>
                            <a href="" target='_blank' className="vkMusic">
                                <img src={vkMusic} alt="" />
                            </a>
                            <a className="AppleMusic">
                                <img src={AppleMusic} alt="" />
                            </a>
                            <a href="" target='_blank' className="YandexMusic">
                                <img src={YandexMusic} alt="" />
                            </a>
                        </div>

                        <img className='cover' src={Lb} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}