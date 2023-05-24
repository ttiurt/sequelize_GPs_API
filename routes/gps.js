const router = require('express').Router()
const gpsCtrl = require('../controllers/gps.js')

router.post('/', gpsCtrl.create)

router.get('/', gpsCtrl.index)

router.put('/:gpId', gpsCtrl.update)

router.delete('/:gpId', gpsCtrl.delete)

module.exports = router