import { Router } from 'express';
import Persona from '../model/Persona';
import { User } from '../model/User';
var router = Router();

const _user = new User();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  
  _user.getUserById(req.params.id);

  console.log(_user);

  // if (user)
  //   res.send(`The user is: ${user.nombreCompleto()}`);
  // else
  //   res.send('no hay usuarios con ese id');
});

router.get('/time', function(req, res, next) {
  setTimeout(() => {res.json('hey');}, 3000);
  
});

router.post('/create/:nombre/:apellido', function(req, res, next) {
  const user = new User(req.params.nombre, req.params.apellido );
  
  const nuevoId = user.createUser(user);

  res.send(`The user was created succesfully with Id: ${nuevoId}`);
});

export default router;
