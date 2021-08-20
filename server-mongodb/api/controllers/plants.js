const express = require('express');
const router =  express.Router();

const Plant =  require('../models/plant')

router.get('/', async (req, res) => {
    try {
        const plants = await Plant.all
        res.json({plants})
    } catch(err) {
        res.status(500).json({err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id)
        res.json(plant)
    } catch (err) {
        res.status(404).json({err})
    }
})


router.post('/', async (req, res) => {
    try{
        const plant = await Plant.create(req.body)
        res.json(plant);
        res.status(201);
    } catch (err) {
        res.status(406).json({err})
    }
})

module.exports = router;