const competencia = class Competencia {
    constructor (id, nombre){
        this.id = id;
        this.nombre = nombre;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM competencias', (err,results) => {
                if(err) return reject(err);

                resolve (results);

              });
        });
    }

}

module.exports = competencia;