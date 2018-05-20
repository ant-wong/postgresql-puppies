const express = require('express')
const router = express.Router()

const db = require('../queries')

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Puppies API' })
})

router.get('/puppies', db.getAllPuppies)
router.get('/puppies/:id', db.getSinglePuppy)
router.post('/puppies', db.createPuppy)
// router.put('/puppies/:id', db.updatePuppy)
// router.delete('/puppies/:id', db.removePuppy)

module.exports = router
