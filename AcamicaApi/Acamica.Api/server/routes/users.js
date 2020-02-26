import { Router } from 'express';
import Persona from '../Model/Persona'

var router = Router();

/* GET users listing. */
router.get('/:nombre/:apellido', function(req, res, next) {
  const user = new Persona(req.params.nombre, req.params.apellido );
  res.send(`The user is: ${user.nombreCompleto()}`);
});

export default router;
