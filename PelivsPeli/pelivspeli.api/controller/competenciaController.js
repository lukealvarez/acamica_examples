var express = require('express');
var router = express.Router();

const competenciaService = require('../service/competenciaService');

module.exports.init = (dbConnection) => {
  
  const service = competenciaService.init(dbConnection);

  router.get('/', (req,res) => service.getAll()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).send(err)));

  return router;
};

// router.get('/:id/peliculas', function(req, res, next) {

//   let competencia = new Competencia();
//   let peliculas = new Peliculas();

//   var promiseCompetencia = compentecia.getCompetencia();
//   var promisePeliculas = peliculas.getPeliculas();

//   res.json({}));

  // Promise.all(promiseCompetencia,promisePeliculas).then(values => {
  //   res.json(new opciones(nombreCompetencia, peliculas));
  // });
// });


//   conn.query('SELECT nombre FROM competencias WHERE id = ?', [req.params.id] , (err,results) => {
//     if(err) throw err;
//     nombreCompetencia = results[0].nombre;
    
//   }).then(() => {
//     conn.query('SELECT id, titulo, poster FROM pelicula', (err,results) => {
//       if(err) throw err;
//       console.log(results[0].poster);
//       peliculas = results;
  
//       console.log(peliculas);
//       res.json(new opciones(nombreCompetencia, peliculas));
  
//     }).then(() => {
//       conn.end((err) => {
//       });
//     });
//   });
// })
