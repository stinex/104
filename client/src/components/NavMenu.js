export const NavMenu = ({ active, setActive }) => {

    const closeNavMenu = () => {
        setActive(!active)
    }

    return (
        <div className={active ? 'nav__manu open' : 'nav__manu'}>
            <div className="container__wrapper">
                <div className="nav__manu_wrapper">
                    <a href="/" onClick={() => closeNavMenu()}>главная</a>
                    <a href="/concerts-page" onClick={() => closeNavMenu()}>концерты</a>
                    <a href="/about-page" onClick={() => closeNavMenu()}>обо мне</a>
                    <a href="/video-page" onClick={() => closeNavMenu()}>видео</a>
                    <a href="/tracks-page" onClick={() => closeNavMenu()}>треки</a>
                    <a href="/contacts-page" onClick={() => closeNavMenu()}>контакты</a>
                </div>
            </div>
        </div>
    )
}