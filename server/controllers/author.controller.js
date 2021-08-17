const Author = require('../models/author.model');

// module.exports = {
//     createAuthor: (request, response) => {
//         const { firstName, lastName } = request.body;
//         Author.create({
//             firstName: firstName,
//             lastName: lastName,
//         })
//             .then(book => response.json(book))
//             .catch(err => response.status(400).json(err))
//     }
// }

const createAuthor = (req, res) => {
    const { body } = req;
    // console.log("BODY:", body);
    Author.create(req.body)
        .then((newAuthor) => {
            res.json({ newAuthor });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const deleteAuthor = (req, res) => {
    console.log(req.params.authorID);
    Author.deleteOne({ _id: req.params.authorID })
        .then((deletedAuthor) => res.status(200).send("Author Deleted"))
        .catch((err) => console.log(err));
};

const editAuthor = (req, res) => {
    const { body } = req;
    Author.findOneAndUpdate({ _id: req.params.authorID }, body, {
        new: true,
        runValidators: true,
    })
        .then((author) => res.json({ author }))
        .catch((err) => console.log(err));
};

const getAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => res.json({ allAuthors }))
        .catch((err) => console.log(err));
};

module.exports = {
    createAuthor,
    deleteAuthor,
    editAuthor,
    getAllAuthors,
}