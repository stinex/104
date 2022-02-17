import React from "react";

export const HomePage = () => {
    return (
        <div className='container__wrapper'>
            <div className="home">
                <div className="home__wrapper">

                    <div className="nav__home">
                        <a href="/tracks-page" ><span></span>треки</a>
                        <a href="/video-page" ><span></span>видео</a>
                        <a href="/about-page" ><span></span>обо мне</a>
                        <a href="/contacts-page" ><span></span>контакты</a>
                        <a href="/concerts-page" ><span></span>концерты</a>
                    </div>

                    <div className="information">
                        <span>// музыкант</span>
                        <span>рэп-исполнитель</span>
                        <span>саунд-продюсер </span>
                    </div>
                </div>
            </div>
        </div>
    )
}