const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    link: { type: String, required: true },
    year: { type: Number, required: true },
    owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Video', schema)