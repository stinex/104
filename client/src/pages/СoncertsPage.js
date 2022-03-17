
import { useState, useEffect, useCallback } from "react"
import { useHttp } from "../hooks/http.hook"

export const СoncertsPage = () => {

    const [data, setData] = useState([])
    const { request } = useHttp()

    const fatchConcerts = useCallback(async () => {
        try {
            const fatched = await request('/api/concert', 'GET', null, {
            })
            setData(fatched)
        } catch (e) { }
    }, [request])

    useEffect(() => {
        fatchConcerts()
    }, [fatchConcerts, request])

    return (
        <>
            <div className="concerts__wrapper">
            </div>
            <div className='container__wrapper'>
                <div className="concerts">
                    {
                        data.reverse().map((item, i) => {
                            return (
                                <a href={item.link} key={i} className="item">
                                    <div className="location">
                                        {item.location}
                                    </div>
                                    <div className="city">
                                        {item.city}
                                    </div>
                                    <div className="date">
                                        {(new Date(item.date)).toLocaleString('ru', {day: 'numeric',month: 'long'})}
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