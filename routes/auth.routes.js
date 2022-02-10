const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const { check, validationResult, body } = require('express-validator')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('login', 'Некорректный login').isLength({ min: 1 }),
        check('password', 'Минимальная длинна 6 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            console.log('БЭК1', req.body)

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }

            const { login, password } = req.body

            const candidate = await User.findOne({ login })
            if (candidate) {
                return res.status(400).json({ message: 'Такой пользователь уже есть' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ login, password: hashedPassword })
            await user.save()

            res.status(201).json({ message: 'Пользователь создан' })

        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })

// /api/auth/login
router.post(
    '/login',
    [
        check('login', 'Некорректный login').isLength({ min: 1 }),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            console.log('БЭК2', req.body)

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе'
                })
            }

            const { login, password } = req.body

            const user = await User.findOne({ login })

            if (!user) {
                return res.status(400).json({ message: 'u Неверные данные' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ message: 'p Неверные данные' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })


        } catch (e) {
            res.status(500).json({ message: 'Какие-то проблемы' })
        }
    })

module.exports = router