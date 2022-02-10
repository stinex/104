
import { useState, useEffect, useContext, useCallback } from "react";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";


export const AdminСoncertsPage = () => {
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [modalActive, setModalActive] = useState(false)
    const [p, setP] = useState(false)
    const [data, setData] = useState([])


    const fatchConcerts = useCallback(async () => {
        try {
            const fatched = await request('/api/concert', 'GET', null, {
                Authorization: `Bearer ${auth.token}`
            })
            setData(fatched)
        } catch (e) { }
    }, [auth.token, request])

    const deleteConsertHandler = async (event) => {
        try {
            const newData = await request('/api/concert/deleteconcert', 'POST', { from: event.target.attributes[0].value }, {
                Authorization: `Bearer ${auth.token}`
            })

            data.splice(data.indexOf(data.find(item => item._id === event.target.attributes[0].value)), 1)
            setData(data)
            setP(!p)
        } catch (e) { }
    }



    useEffect(() => {
        fatchConcerts()
    }, [fatchConcerts, request])


    if (loading) {
        return <Loader />
    }
    return (
        <>

            <button className=" waves-light btn" onClick={() => setModalActive(true)}>Добавить концер</button>

            {!data.length ? <p>Концертов нет</p> : <table>
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Место ролвеоедния</th>
                        <th>Дата</th>
                        <th></th>
                    </tr>
                </thead>

                {data.map((data, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{data.city}</td>
                                <td>{data.location}</td>
                                <td>{data.date}</td>
                                <td><button data-id={data._id} data-number={index} onClick={deleteConsertHandler}>Удалить</button></td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>}

            <Modal active={modalActive} setActive={setModalActive} data={data} p={p} setP={setP} />
        </>
    )
}