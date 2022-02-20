import { useState, useEffect, useContext, useCallback } from "react";
import { Loader } from "../components/Loader";
import { AddTrackAdmin } from "../components/modals/AddTrackAdmin";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const AdminTracksPage = () => {
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [modalActive, setModalActive] = useState(false)
    const [p, setP] = useState(false)
    const [data, setData] = useState([])

    const fatchTracks = useCallback(async () => {
        try {
            const fatched = await request('/api/track', 'GET', null, {
                Authorization: `Bearer ${auth.token}`
            })
            setData(fatched)
        } catch (e) { }
    }, [auth.token, request])

    const deleteTrackHandler = async (event) => {
        try {
            const newData = await request('/api/track/deletetrack', 'POST', { from: event.target.attributes[0].value }, {
                Authorization: `Bearer ${auth.token}`
            })

            data.splice(data.indexOf(data.find(item => item._id === event.target.attributes[0].value)), 1)
            setData(data)
            setP(!p)
        } catch (e) { }
    }

    useEffect(() => {
        fatchTracks()
    }, [fatchTracks, request])

    if (loading) {
        return <Loader />
    }
    return (
        <>
            <button className=" waves-light btn" onClick={() => setModalActive(true)}>Добавить трек</button>

            {!data.length ? <p>Треков нет</p> : <table>
                <thead>
                    <tr>
                        <th>Обложка</th>
                        <th>Название</th>
                        <th>Тип</th>
                        <th>iTunes</th>
                        <th>VK music</th>
                        <th>Яндекс.Музыка</th>
                        <th>Spotify</th>
                    </tr>
                </thead>
                {data.map((data, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{data?.img}</td>
                                <td>{data?.name}</td>
                                <td>{data?.type}</td>
                                <td>{data?.url_itunes}</td>
                                <td>{data?.url_vk_music}</td>
                                <td>{data?.url_spotify}</td>
                                <td>{data?.url_yandex_music}</td>
                                <td><button data-id={data?._id} data-number={index} onClick={deleteTrackHandler}>Удалить</button></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>}
            <AddTrackAdmin active={modalActive} setActive={setModalActive} data={data} p={p} setP={setP} />
        </>
    )
}