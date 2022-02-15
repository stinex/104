import React from "react";

export const СontactsPage = () => {
    return (
        <>
            <div className='container'>
                <div className="contacts">
                    <div className="block-l">
                        <div className="links">
                            <a href="" className="link">INSTAGRAM</a>
                            <a href="" className="link">YOUTUBE</a>
                            <a href="" className="link">TIK TOK</a>
                            <a href="" className="link">telegram</a>
                            <a href="" className="link">VK </a>
                        </div>
                    </div>

                    <div className="block-r">
                        <div className="header">MGMT/BOOKING </div>

                        <div className="social-tl">
                            <span className="tl">telegram</span>
                            <a href="">t.me/ilyassov</a>
                            <a href="">t.me/mgmt_104</a>
                        </div>

                        <div className="social-ph">
                            <a href="tel:+7 936 000 10 40">+7 936 000 10 40</a>
                            <a href="tel:+7 705 341 69 96">+7 705 341 69 96</a>
                            <span>Данияр</span>
                        </div>

                        <div className="header">MGMT</div>
                        <div className="social-tl">
                            <span className="tl">telegram</span>
                            <a href="" className="tl-bottom">t.me/krisgregor</a>
                            <span className='name'>Кристина</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}