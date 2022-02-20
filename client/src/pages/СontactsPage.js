export const СontactsPage = () => {
    return (
        <>
            <div className='container__wrapper'>
                <div className="contacts">
                    <div className="block-l">
                        <div className="links">
                            <a target='_blank' href="https://www.instagram.com/molodoi_boss/" className="link" rel="noreferrer">INSTAGRAM</a>
                            <a target='_blank' href="https://www.youtube.com/channel/UCj33o6G3tNgZzQ3ZL0nlWyg/videos" className="link" rel="noreferrer">YOUTUBE</a>
                            <a target='_blank' href="https://www.tiktok.com/@104_molodoi_boss?lang=ru-RU" className="link" rel="noreferrer">TIK TOK</a>
                            <a target='_blank' href="https://t.me/molodoi_boss_104" className="link" rel="noreferrer">telegram</a>
                            <a target='_blank' href="https://vk.com/phanatixxx" className="link" rel="noreferrer">VK </a>
                        </div>
                    </div>

                    <div className="block-r">
                        <div className="header">MGMT/<br/>BOOKING </div>

                        <div className="social-tl">
                            <span className="tl">telegram</span>
                            <a target='_blank' href="https://telegram.me/ilyassov" rel="noreferrer">t.me/ilyassov</a>
                            <a target='_blank' href="https://telegram.me/mgmt_104" rel="noreferrer">t.me/mgmt_104</a>
                        </div>

                        <div className="social-ph">
                            <a href="tel:+7 936 000 10 40">+7 936 000 10 40</a>
                            <a href="tel:+7 705 341 69 96">+7 705 341 69 96</a>
                            <span>Данияр</span>
                        </div>

                        <div className="header">MGMT</div>
                        <div className="social-tl">
                            <span className="tl">telegram</span>
                            <a href="https://telegram.me/krisgregor" target='_blank' className="tl-bottom" rel="noreferrer">t.me/krisgregor</a>
                            <span className='name'>Кристина</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}