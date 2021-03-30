//to launch server navigate to "server" folder and execute "node index"
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");
const { getMaxListeners } = require("./database");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES

//create a book (currently gives error)
app.post("/book", async(req, res) => {
    try {
        const {description} = req.body;
        const newBook = await pool.query("INSERT INTO book (isbn) VALUES($1)", [isbn]
        );
        res.json(newBook);
    } catch (err) {
        console.error(err.message);
    }
})

//get all books
//to test this watch video "PERN Stack Course" @15:30 - you will need to create a Postman acct.
app.get("/book", async(req, res) => {
    try { 
        const allBook = await pool.query("SELECT * FROM book");
        res.json(allBook.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get single book
app.get("/book/:isbn", async (req, res) => {
    try{
        const {isbn} = req.params;
        const book = await pool.query("SELECT * FROM book WHERE isbn = $1", [isbn]);
        res.json(book.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
})

//store new user data (currently gives error)
app.post("/userprofile", async (req, res) => {
    try{
        const {username} = req.body;
        const newUser = await pool.query("INSERT INTO userprofile (username, password, fname, lname, email) VALUES ($1, $2, $3, $4, $5) RETURNING *",
         [username, password, fname, lname, email]
        );

        res.json(newUser.rows[0]);
    }   catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});


