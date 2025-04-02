// blocca POST e PUT se mancano title o author

function validator (req, res, next) {

    const title = req.body.title;

    const author = req.body.author;

    if (title && author) {

        return next();
    }

    res.sendStatus(400);
}

module.exports = validator;