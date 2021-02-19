export default function login (req, res, next) {
    console.log('Este es el login');
    
    if (1)
        next();
    
    res.redirect('/');
}