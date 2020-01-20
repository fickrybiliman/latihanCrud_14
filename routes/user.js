const router = require('express').Router();
const userControllers = require('../controllers/users');

router.post('/', userControllers.createUsers);
router.get('/', userControllers.readUsers);
router.put('/:id', userControllers.updateUsers);
router.delete('/:id', userControllers.deleteUsers);

module.exports = router;
