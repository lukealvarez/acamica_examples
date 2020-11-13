import mysql from 'mysql';

const connection = mysql.createConnection({
    user: 'root',
    password: 'password',
    database: 'acamica',
    insecureAuth : true
});

export default class Persona {
    constructor (nombre, apellido, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }

    createUser(user) {
        connection.connect((err) => {
            if (err) throw err;
            console.log('connected!!!');
        });

        let nuevoId;

        connection.query('INSERT INTO users SET ?', user, (err, res) => {
            if(err) throw err;

            nuevoId = res.insertId;
        });


        connection.end((err) => {});

        return nuevoId;
    }

    getUserById(id) {
        connection.connect((err) => {
            if (err) throw err;
            console.log('connected!!!');

        });

        connection.query('DELETE FROM users WHERE id = ?', id, (err, user) => {
            if (err) throw err;
            this.apellido = user[0].Apellido;
            this.nombre = user[0].Nombre;
            this.id = user[0].id;
        })

        connection.end((err) => {});
    }
}
