const { Router } = require('express')
const config = require('config')
const Video = require('../models/Video')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post(
    '/addvideo',
    auth,
    async (req, res) => {
        try {
            const baseUrl = config.get('baseUrl')
            const img = req.body.from.img
            const name = req.body.from.name
            const link = req.body.from.link
            const year = req.body.from.year
            console.log('===>', req.body)
            const video = new Video({
                name, img, link, year, owner: req.user.userId
            })
            console.log(video)
            await video.save()

            res.status(201).json({ video })

        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })

router.get('/', async (req, res) => {
    try {
        console.log('===>', req)
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
             console.log(from)
            const existing = await Video.findOne({ _id: from })
            console.log(existing)
            if (existing) {
                return res.json({ video: existing.delete() })
            }
        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })


module.exports = router