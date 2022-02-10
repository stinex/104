const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    city: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    link: { type: String, required: true },
    owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Concert', schema)