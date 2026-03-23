const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/signup',
    body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 6 }),  // Improved password length
    body('username').trim().isLength({ min: 3 }),

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            });
        }

        const { email, username, password } = req.body;

        // Check if email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already taken' });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            email,
            username,
            password: hashPassword
        });

        res.status(201).json({
            message: 'User successfully registered',
            user: { username: newUser.username, email: newUser.email }
        });
    })


router.get('/student_login', (req, res) => {
    res.render('student_login')
})
router.post('/student_login',
    body('username').trim().isLength({ min: 3 }),
    body('password').trim().isLength({ min: 5 }),

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            });
        }

        const { username, password } = req.body;

        const user = await userModel.findOne({ username });

        if (!user) {
            return res.status(400).json({
                message: 'Username or password is incorrect'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Username or password is incorrect'
            });
        }

        // Generate JWT Token with expiry
        const token = jwt.sign(
            { userId: user._id, email: user.email, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }  // Set expiry for 1 hour
        );

        // Send token as a cookie with httpOnly and secure options
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        // Respond with the success message
        res.status(200).json({
            message: 'Logged in successfully',
            token: token
        });
    })


router.get('/teacher_login', (req, res) => {
    res.render('teacher_login')
})
router.post('/teacher_login',
    body('username').trim().isLength({ min: 3 }),
    body('password').trim().isLength({ min: 5 }),

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            });
        }

        const { username, password } = req.body;

        const user = await userModel.findOne({ username });

        if (!user) {
            return res.status(400).json({
                message: 'Username or password is incorrect'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Username or password is incorrect'
            });
        }

        // Generate JWT Token with expiry
        const token = jwt.sign(
            { userId: user._id, email: user.email, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }  // Set expiry for 1 hour
        );

        // Send token as a cookie with httpOnly and secure options
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        // Respond with the success message
        res.status(200).json({
            message: 'Logged in successfully',
            token: token
        });
    })



module.exports = router;