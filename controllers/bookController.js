// import book.js
const books = require("../data/book.json");

//index
function index (req, res) {

    const author = req.query.author;

    if (author) {

        const authorBook = books.filter(elem => elem.author === author);

        // return a response with json format
        return res.json(authorBook);
    }

    res.json(books);
}

//show
function show (req, res) {

    const id = parseInt(req.params.id);

    const currentBook = books.find((elem) => elem.id === id);

    currentBook ? res.json(currentBook) : res.status(404).json({

        status: 404,
        error: "Not Found",
        message: "Book not found"
    });

}

//store
function store (req, res) {

    const id = books[books.length - 1].id + 1;

    const newBook = {

        id,
        "title": req.body.title,
        "author": req.body.author,
        "year": parseInt(req.body.year),
        "available": true
    }

    books.push(newBook);

    res.status(201).json(newBook);// status for created
}

//update
function update (req, res) {

    const id = parseInt(req.params.id);

    const currentBook = books.find((elem) => elem.id === id);

    if(!currentBook) {

        return res.status(404).json({

            status: 404,
            error: "Not Found",
            message: "Book not found"
        });
    }

    //update new data
    currentBook.title = req.body.title;
    currentBook.author = req.body.author;
    currentBook.year = parseInt(req.body.year);
    currentBook.available = req.body.available === "true" ? true : false;

    res.json(currentBook);
}

//destroy
function destroy (req, res) {

    const id = parseInt(req.params.id);

    const currentId = books.findIndex((elem) => elem.id === id);

    if(currentId === -1) {

        return res.status(404).json({

            status: 404,
            error: "Not Found",
            message: "Book not found"
        });
    }

    books.splice(currentId, 1);
    
    res.sendStatus(204);
}

module.exports = {index, show, store, update, destroy};