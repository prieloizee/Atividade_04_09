//Modulo Router do express
//Router sera utilixado para definir rotas especificas
const router = require('express').Router();

//Importa a controller de professores onde contém a logica relacionada a professores
const teacherController = require('../controllers/teacherController');

// Rota POST para '/teacher'
router.post('/teacher/',teacherController.postTeacher);
router.get('/teacher/',teacherController.getTeacher);

module.exports = router
