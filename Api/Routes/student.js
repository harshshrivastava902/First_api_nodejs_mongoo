const express = require('express')
const Student = require('../modal/student')
const mongoose = require('mongoose')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET req fro student detail"
    })
})

router.post('/', (req, res, next) => {
    const student = new Student(
        {
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email

        }
    )
    
    student.save()
        .then((result) => {
            console.log(result);
            res.status(200).json({
                newStudent: result
            })
        })
        .catch((err) => {
            console.log("Error===>", err);
            res.status(500).json({
                error: err
            })
        })
})


module.exports = router