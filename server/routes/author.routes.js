const AuthorController = require('../controllers/author.controller');
module.exports = app => {
    app.get('/api/author', AuthorController.getAllAuthors);
    app.post('/api/author/new', AuthorController.createAuthor);
    app.delete('/api/author/:authorID', AuthorController.deleteAuthor);
    app.put('/api/author/:authorID', AuthorController.editAuthor);
}

