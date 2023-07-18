const db = require('../DB/db');

const getBooks = async (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data);
  }); 
}

const addBook = async (req, res) => {
  const q = "INSERT INTO books (`title`,`description`, `price`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover
  ];
  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Book has been created succesfully");
  })
}

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q,[bookId], (err, data) => {
    if(err) return res.json(err)
    return res.json("Book has been deleted succesfully");
  });
}

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover
  ];

  db.query(q,[...values, bookId], (err, data) => {
    if(err) return res.json(err)
    return res.json("Book has been updated succesfully");
  });
}


module.exports = { getBooks, addBook, deleteBook, updateBook }