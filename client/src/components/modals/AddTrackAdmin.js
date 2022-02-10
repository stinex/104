import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import '../../scss/modal.scss';

export const AddTrackAdmin = ({ active, setActive, setData, data, setP, p }) => {
    const auth = useContext(AuthContext)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState()
    const [url_itunes, setUrl_itunes] = useState()
    const [url_vk_music, setUrl_vk_music] = useState()
    const [url_yandex_music, setUrl_yandex_music] = useState()
    const [url_spotify, setUrl_spotify] = useState()

    const { request } = useHttp()

    const addTracktHandler = async () => {
        try {
            const newData = await request('/api/track/addtrack', 'POST', { from: { name, img, type, url_itunes, url_vk_music, url_spotify, url_yandex_music } }, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(newData)
            setP(!p)
            setData(data.push(newData.track))
        } catch (e) { }
        setActive(false)
    }

    useEffect(() => {
        window.M.updateTextFields()
    }, [auth.token]);
    return (
        <div className={active ? 'modal_wrapper open' : 'modal_wrapper'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>

                <h1>Добавить трек</h1>

                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="input-field">
                            <input
                                type="file"
                                id="img"
                                className="autocomplete"
                                value={img}
                                onChange={e => setImg(e.target.value)} />
                            <label htmlFor="autocomplete-input">Обложка</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="name"
                                className="autocomplete"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            <label htmlFor="autocomplete-input">Название</label>
                        </div>
                        <div className="input-field">
                            <input
                                type='text'
                                id="type"
                                value={type}
                                onChange={e => setType(e.target.value)}
                                placeholder="Сингл / Aльбом"
                                className='datepicker' />
                            <label htmlFor="autocomplete-input">Тип</label>
                        </div>

                        <div className="input-field">
                            <input
                                type="text"
                                id="url_itunes"
                                className="autocomplete "
                                value={url_itunes}
                                onChange={e => setUrl_itunes(e.target.value)} />
                            <label htmlFor="autocomplete-input">Ссылка на iTunes</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="url_vk_music"
                                className="autocomplete "
                                value={url_vk_music}
                                onChange={e => setUrl_vk_music(e.target.value)} />
                            <label htmlFor="autocomplete-input">Ссылка на VK music</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="url_yandex_music"
                                className="autocomplete "
                                value={url_yandex_music}
                                onChange={e => setUrl_yandex_music(e.target.value)} />
                            <label htmlFor="autocomplete-input">Ссылка на Яндекс.Музыка</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="url_spotify"
                                className="autocomplete"
                                value={url_spotify}
                                onChange={e => setUrl_spotify(e.target.value)} />
                            <label htmlFor="autocomplete-input">Ссылка на Spotify</label>
                        </div>
                    </div>
                    <div className="col s8 offset-s2">
                        <button className="waves-effect waves-light btn-small" onClick={addTracktHandler} >Добавить</button>
                    </div>
                </div>

            </div>
        </div>
    )
}