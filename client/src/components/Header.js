import Logo from '../img/logo.png';



export const Header = () => {
    return (
        <div className="header__wrapper">
             <div className="blur"></div>
            <div className="container">
                <div className="header">

                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="right_header">
                        <div className="social">
                            <a href="#" className="link" target='_blank' href="https://t.me/molodoi_boss_104" data-back="telegram" data-front="telegram"></a>
                            <span></span>
                            <a href="#" className="link" target='_blank' href="https://vk.com/phanatixxx" data-back="VK" data-front="VK"></a>
                            <span></span>
                            <a href="#" className="link" target='_blank' href="https://www.tiktok.com/@104_molodoi_boss?lang=ru-RU" data-back="TIK TOK" data-front="TIK TOK"></a>
                            <span></span>
                            <a href="#" className="link" target='_blank' href="https://www.instagram.com/molodoi_boss/" data-back="INSTAGRAM" data-front="INSTAGRAM"></a>
                            <span></span>
                            <a href="#" className="link" target='_blank' href="https://www.youtube.com/channel/UCj33o6G3tNgZzQ3ZL0nlWyg/videos" data-back="YOUTUBE" data-front="YOUTUBE"></a>
                        </div>
                        <button className="nav_bar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}