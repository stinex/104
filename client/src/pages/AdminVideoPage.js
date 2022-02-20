import { useState, useEffect, useContext, useCallback } from "react";
import { Loader } from "../components/Loader";
import { AddVideoAdmin } from "../components/modals/AddVideoAdmin";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const AdminVideoPage = () => {
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [modalActive, setModalActive] = useState(false)
    const [p, setP] = useState(false)
    const [data, setData] = useState([])

    const fatchVideos = useCallback(async () => {
        try {
            const fatched = await request('/api/video', 'GET', null, {
                Authorization: `Bearer ${auth.token}`
            })
            setData(fatched)
        } catch (e) { }
    }, [auth.token, request])

    const deleteVideoHandler = async (event) => {
        try {
            const newData = await request('/api/video/deletevideo', 'POST', { from: event.target.attributes[0].value }, {
                Authorization: `Bearer ${auth.token}`
            })
            data.splice(data.indexOf(data.find(item => item._id === event.target.attributes[0].value)), 1)
            setData(data)
            setP(!p)
        } catch (e) { }
    }

    useEffect(() => {
        fatchVideos()
    }, [fatchVideos, request])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <button className=" waves-light btn" onClick={() => setModalActive(true)}>Добавить видео</button>
            {!data.length ? <p>Видео нет</p> : <table>
                <thead>
                    <tr>
                        <th>Изображение</th>
                        <th>Название</th>
                        <th>Дата</th>
                        <th>Ссылка</th>
                    </tr>
                </thead>
                {data.map((data, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{data?.img}</td>
                                <td>{data?.name}</td>
                                <td>{data?.year}</td>
                                <td>{data?.link}</td>
                                <td><button data-id={data?._id} data-number={index} onClick={deleteVideoHandler}>Удалить</button></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>}
            <AddVideoAdmin active={modalActive} setActive={setModalActive} data={data} p={p} setP={setP} />
        </>
    )
}