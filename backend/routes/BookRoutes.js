const express = require('express');
const { getBooks, addBook, deleteBook, updateBook } = require('../controllers/BookController');

const router = express.Router();

router.route('/').get(getBooks).post(addBook);
router.route('/:id').delete(deleteBook).put(updateBook);

module.exports = router;