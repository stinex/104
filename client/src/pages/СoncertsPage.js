import React from "react";


const arr = [
    { city: 'Санкт-петербург', location: 'Aurora', date: '24 Апреля', link: 'ссылка на покупку билетов' },
    { city: 'Челябинск', location: 'ГлавCLUB', date: '30 Апреля', link: 'ссылка на покупку билетов' },
    { city: 'Тверь', location: 'ГлавCLUB', date: '30 Апреля', link: 'ссылка на покупку билетов' },
    { city: 'Москва', location: 'ГлавCLUB', date: '30 Апреля', link: 'ссылка на покупку билетов' }
]

export const СoncertsPage = () => {
    return (
        <>
            <div className="concerts__wrapper">
            </div>
            <div className='container'>

                <div className="concerts">
                    {
                        arr.map((item, i) => {
                            return (
                                <a href={item.link} key={i} className="item">
                                    <div className="location">
                                        {item.location}
                                    </div>
                                    <div className="city">
                                        {item.city}
                                    </div>
                                    <div className="date">
                                        {item.date}
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}