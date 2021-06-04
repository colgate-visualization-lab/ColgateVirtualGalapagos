const express = require('express')
const router = new express.Router()
const Note = require('../models/note')
const auth = require('../middleware/auth')

router.post('/notes', auth, async (req, res) => {
    const note = new Note({
        ...req.body, 
        owner: req.user._id
    })
    try {
        await note.save()
        res.status(201).send(note)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/notes', auth, async(req, res) => {
    try {
        await req.user.populate('notes').execPopulate()
        res.send(req.user.notes)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/notes/:module/:slide', auth, async(req, res) => {
    const module = req.params.module
    const slide = req.params.slide 
    if (!module || !slide){
        next()
    }
    try {
        const notes = await Note.find({moduleName: module, slide: slide, owner: req.user._id})
        res.status(200).send(notes)
    } catch (e){
        res.sendStatus(500)
    }
})

router.get('/notes/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const note = await Note.findOne({ _id, owner: req.user._id })

        if (!note) {
            return res.status(404).send()
        }

        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/notes/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'content']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const note = await Note.findOne({ _id: req.params.id, owner: req.user._id})

        if (!note) {
            return res.status(404).send()
        }

        updates.forEach((update) => note[update] = req.body[update])
        await note.save()
        res.send(note)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/notes/:id', auth, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!note) {
            res.status(404).send()
        }

        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router