export const NavMenu = ({ active, setActive }) => {

    const closeNavMenu = () => {
        setActive(!active)
    }

    return (
        <div className={active ? 'nav__manu open' : 'nav__manu'}>
            <div className="container__wrapper">
                <div className="nav__manu_wrapper">
                    <a className="d-0" href="/" onClick={() => closeNavMenu()}>главная</a>
                    <a className="d-02" href="/concerts-page" onClick={() => closeNavMenu()}>концерты</a>
                    <a className="d-03" href="/about-page" onClick={() => closeNavMenu()}>обо мне</a>
                    <a className="d-04" href="/video-page" onClick={() => closeNavMenu()}>видео</a>
                    <a className="d-05" href="/tracks-page" onClick={() => closeNavMenu()}>треки</a>
                    <a className="d-06" href="/contacts-page" onClick={() => closeNavMenu()}>контакты</a>
                </div>
            </div>
        </div>
    )
}