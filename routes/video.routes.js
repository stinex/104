const { Router } = require('express')
const config = require('config')
const Video = require('../models/Video')
const auth = require('../middleware/auth.middleware')
const uploadMiddleware = require('../middleware/upload.middleware')
const router = Router()

router.post(
    '/addvideo',
    auth,
    uploadMiddleware.single('img'),
    async (req, res) => {
        try {
            const baseUrl = config.get('baseUrl')

            const img = req.file.path
            const name = req.body.name
            const link = req.body.link
            const year = req.body.year

            const video = new Video({
                name, img, link, year, owner: req.user.userId
            })
            await video.save()
            if (req.file) {
                res.json(video)
            }

            res.status(201).json({ video })
        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })

router.get('/', async (req, res) => {
    try {

        const videos = await Video.find()
        res.json(videos)

    } catch (e) {
        res.status(500).json({ message: 'Какие-то проблемы' })
    }
})

router.post(
    '/deletevideo',
    async (req, res) => {
        try {
            const { from } = req.body
            const existing = await Video.findOne({ _id: from })
            if (existing) {
                return res.json({ video: existing.delete() })
            }
        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })


module.exports = router