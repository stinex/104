const { Router } = require('express')
const config = require('config')
const Track = require('../models/Track')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post(
    '/addtrack',
    auth,
    async (req, res) => {
        try {
            const baseUrl = config.get('baseUrl')
            const img = req.body.from.img
            const name = req.body.from.name
            const type = req.body.from.type
            const url_itunes = req.body.from.url_itunes
            const url_vk_music = req.body.from.url_vk_music
            const url_yandex_music = req.body.from.url_yandex_music
            const url_spotify = req.body.from.url_spotify
            const track = new Track({
                name, img, type, url_itunes, url_vk_music, url_yandex_music, url_spotify, owner: req.user.userId
            })
            console.log('===>', track)
            await track.save()

            res.status(201).json({ track })

        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })

router.get('/', async (req, res) => {
    try {
        console.log('===>', req)
        const tracks = await Track.find()
        res.json(tracks)

    } catch (e) {
        res.status(500).json({ message: 'Какие-то проблемы' })
    }
})

router.post(
    '/deletetrack',
    async (req, res) => {
        try {
             const { from } = req.body
             console.log(from)
            const existing = await Track.findOne({ _id: from })
            console.log(existing)
            if (existing) {
                return res.json({ track: existing.delete() })
            }
        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })


module.exports = router