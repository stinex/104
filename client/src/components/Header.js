/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from 'react'
import Logo from '../img/logo.png'
import { NavMenu } from './NavMenu'



export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className="header__wrapper">
                <div className="blur"></div>
                <div className="container__wrapper">
                    <div className="header">

                        <a href='/' className="logo">
                            <img src={Logo} alt="" />
                        </a>
                        <div className="right_header">
                            <div className="social">
                                <a className="link" target='_blank' href="https://t.me/molodoi_boss_104" data-back="telegram" data-front="telegram" rel="noreferrer"></a>
                                <span></span>
                                <a className="link" target='_blank' href="https://vk.com/phanatixxx" data-back="VK" data-front="VK" rel="noreferrer"></a>
                                <span></span>
                                <a className="link" target='_blank' href="https://www.tiktok.com/@104_molodoi_boss?lang=ru-RU" data-back="TIK TOK" data-front="TIK TOK" rel="noreferrer"></a>
                                <span></span>
                                <a className="link" target='_blank' href="https://www.instagram.com/molodoi_boss/" data-back="INSTAGRAM" data-front="INSTAGRAM" rel="noreferrer"></a>
                                <span></span>
                                <a className="link" target='_blank' href="https://www.youtube.com/channel/UCj33o6G3tNgZzQ3ZL0nlWyg/videos" data-back="YOUTUBE" data-front="YOUTUBE" rel="noreferrer"></a>
                            </div>
                            <div className={openMenu ? 'nav_bar open' : 'nav_bar'} onClick={() => setOpenMenu(!openMenu)}>
                                <span></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <NavMenu active={openMenu} setActive={setOpenMenu} />
        </>
    )
}