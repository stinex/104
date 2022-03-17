const { Router } = require('express')
const config = require('config')
const Concert = require('../models/Concert')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post(
    '/addconcert',
    auth,
    async (req, res) => {
        try {
            const baseUrl = config.get('baseUrl')
            // const { from } = req.body
            // console.log(from)
            // const existing = await Concert.findOne({ from })
            // console.log(existing)
            // if (existing) {
            //     return res.json({ concert: existing })
            // }
            const city = req.body.from.city
            const location = req.body.from.location
            const date = req.body.from.date
            const link = req.body.from.link
            // console.log('===>', req.body.from)
            const concert = new Concert({
                city, location, date, link, owner: req.user.userId
            })
            await concert.save()

            res.status(201).json({ concert })

        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })
router.get('/', async (req, res) => {
    try {
        const concerts = await Concert.find()
        res.json(concerts.reverse())

    } catch (e) {
        res.status(500).json({ message: 'Какие-то проблемы' })
    }
})

router.post(
    '/deleteconcert',
    async (req, res) => {
        try {
             const { from } = req.body
             console.log(from)
            const existing = await Concert.findOne({ _id: from })
            console.log(existing)
            if (existing) {
                return res.json({ concert: existing.delete() })
            }
        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })


module.exports = router