import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import '../../scss/modal.scss';
import axios from 'axios';

export const AddTrackAdmin = ({ active, setActive, setData, data, setP, p }) => {
    const auth = useContext(AuthContext)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState()
    const [url_itunes, setUrl_itunes] = useState()
    const [url_vk_music, setUrl_vk_music] = useState()
    const [url_yandex_music, setUrl_yandex_music] = useState()
    const [url_spotify, setUrl_spotify] = useState()

    const addTracktHandler = async () => {
        try {
            const dataFrom = new FormData()
            dataFrom.append('img', img)
            dataFrom.append('name', name)
            dataFrom.append('type', type)
            dataFrom.append('url_itunes', url_itunes === undefined ? '' : url_itunes)
            dataFrom.append('url_vk_music', url_vk_music === undefined ? '' : url_vk_music)
            dataFrom.append('url_spotify', url_spotify === undefined ? '' : url_spotify)
            dataFrom.append('url_yandex_music', url_yandex_music === undefined ? '' : url_yandex_music)

            const newData2 = await axios.post('/api/track/addtrack', dataFrom, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                    'Content-type': 'multipart/form-data'
                }
            })
            setP(!p)
            setData(data.push(newData2.data))
        } catch (e) { }
        setActive(false)
    }

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
                                name='img'
                                className="autocomplete"
                                onChange={e => setImg(e.target.files[0])} />
                            {/* <label htmlFor="autocomplete-input">Обложка</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="name"
                                className="autocomplete"
                                placeholder="Название"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Название</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type='text'
                                id="type"
                                value={type}
                                onChange={e => setType(e.target.value)}
                                placeholder="Сингл / Aльбом"
                                className='datepicker' />
                            {/* <label htmlFor="autocomplete-input">Тип</label> */}
                        </div>

                        <div className="input-field">
                            <input
                                type="text"
                                id="url_itunes"
                                className="autocomplete "
                                placeholder="Ссылка на iTunes"
                                value={url_itunes}
                                onChange={e => setUrl_itunes(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Ссылка на iTunes</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="url_vk_music"
                                className="autocomplete "
                                placeholder="Ссылка на VK music"
                                value={url_vk_music}
                                onChange={e => setUrl_vk_music(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Ссылка на VK music</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="url_yandex_music"
                                className="autocomplete "
                                placeholder="Ссылка на Яндекс.Музыка"
                                value={url_yandex_music}
                                onChange={e => setUrl_yandex_music(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Ссылка на Яндекс.Музыка</label> */}
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="url_spotify"
                                className="autocomplete"
                                placeholder="Ссылка на Spotify"
                                value={url_spotify}
                                onChange={e => setUrl_spotify(e.target.value)} />
                            {/* <label htmlFor="autocomplete-input">Ссылка на Spotify</label> */}
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