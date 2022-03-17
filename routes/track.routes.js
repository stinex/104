const { Router } = require('express')
const Track = require('../models/Track')
const auth = require('../middleware/auth.middleware')
const uploadMiddleware = require('../middleware/upload.middleware')
const router = Router()


router.post(
    '/addtrack',
    auth,
    uploadMiddleware.single('img'),
    async (req, res) => {
        try {
            const img = req.file.path
            const name = req.body.name
            const type = req.body.type
            const url_itunes = req.body?.url_itunes
            const url_vk_music = req.body?.url_vk_music
            const url_yandex_music = req.body?.url_yandex_music
            const url_spotify = req.body?.url_spotify

            const track = new Track({
                name, img, type, url_itunes, url_vk_music, url_yandex_music, url_spotify, owner: req.user.userId
            })

            await track.save()
            if (req.file) {
                res.json(track)
            }

            res.status(201).json({track})
        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })

router.get('/', async (req, res) => {
    try {
        const tracks = await Track.find()
        res.json(tracks.reverse())

    } catch (e) {
        res.status(500).json({ message: 'Какие-то проблемы' })
    }
})

router.post(
    '/deletetrack',
    async (req, res) => {
        try {
            const { from } = req.body
            const existing = await Track.findOne({ _id: from })
            if (existing) {
                return res.json({ track: existing.delete() })
            }
        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })


module.exports = router