const router = require("express").Router()

const userServices = require('./users.services')

router.get("/", userServices.getAllUsers)
router.post('/', userServices.postNewUser)
router.get("/:id", userServices.getUserById)
router.delete('/:id', userServices.deleteUser)
router.patch('/:id', userServices.patchUser)

module.exports = router