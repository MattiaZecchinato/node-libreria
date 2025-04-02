// stampa in console metodo e URL per ogni richiesta

function logger (req, res, next) {

    console.log(req.method);

    console.log(`http://localhost/books${req.url}`);

    next();
}

module.exports = logger;