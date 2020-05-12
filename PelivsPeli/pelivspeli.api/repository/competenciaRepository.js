const repository = {};

module.exports.init = (dbConnection) => {
    const conn = dbConnection;

    repository.getAll = () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT nombre FROM competencias',  (err,results) => {
                if(err) return reject(error);
                resolve(results);
            });
        });
    };

    return repository;
}