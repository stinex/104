const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, required: true },
    url_itunes: { type: String},
    url_vk_music: { type: String},
    url_spotify: { type: String},
    url_yandex_music: { type: String},
    owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Track', schema)