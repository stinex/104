import React from "react";
import NotFound from '../img/404.png';


export const NotFoundPage = () => {


    return (
        <div className='container__wrapper'>
            <div className="not-found">
                <img src={NotFound} alt="" />
                <p>К сожалению, данная страница не существует</p>
                <a href="/">На главную</a>
            </div>
        </div>
    )
}