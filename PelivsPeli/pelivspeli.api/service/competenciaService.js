const competenciaRepository = require('../repository/competenciaRepository')
const service = {};

module.exports.init = (dbConnection) => {
    const repository = competenciaRepository.init(dbConnection);

    service.getAll = () => repository.getAll()
        .then((data) => { return data })
        .catch((err) => {return err});

    return service;
}