import { Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/time', function(req, res, next) {
  setTimeout(() => {res.json('hey');}, 10000);
  
});


export default router;
