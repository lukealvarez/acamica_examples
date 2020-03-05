import { Router } from 'express';
import Persona from '../model/Persona';
import { User } from '../model/User';
import { createUser, getUserById } from '../controller/userController';
var router = Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  
  const user = getUserById(req.params.id);

  if (user)
    res.send(`The user is: ${user.nombreCompleto()}`);
  else
    res.send('no hay usuarios con ese id');
});

router.post('/create/:nombre/:apellido', function(req, res, next) {
  const user = new User(req.params.nombre, req.params.apellido );

  createUser(user);

  res.send(`The user was created succesfully with Id: ${user.id}`);
});

export default router;
