const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Base URL for the API
const base_url = "http://localhost:3000";

// Set the template engine
app.set("views", path.join(__dirname, "/public/views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(base_url + "/books");
    res.render("books", { books: response.data });
  } catch (err) {
    console.error("Error fetching books:", err.message);
    res.status(500).send("Error fetching books");
  }
});

app.get("/book/:id", async (req, res) => {
  try {
    const response = await axios.get(base_url + "/books/" + req.params.id);
    res.render("book", { book: response.data });
  } catch (err) {
    console.error("Error fetching book:", err.message);
    res.status(500).send("Error fetching book");
  }
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/create", async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const data = { title, author, publishedYear };
    await axios.post(base_url + "/books", data);
    res.redirect("/");
  } catch (err) {
    console.error("Error creating book:", err.message);
    res.status(500).send("Error creating book");
  }
});

app.get("/update/:id", async (req, res) => {
  try {
    const response = await axios.get(base_url + "/books/" + req.params.id);
    res.render("update", { book: response.data });
  } catch (err) {
    console.error("Error fetching book for update:", err.message);
    res.status(500).send("Error fetching book for update");
  }
});

app.post("/update/:id", async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const data = { title, author, publishedYear };
    await axios.put(base_url + "/books/" + req.params.id, data);
    res.redirect("/");
  } catch (err) {
    console.error("Error updating book:", err.message);
    res.status(500).send("Error updating book");
  }
});

app.get("/delete/:id", async (req, res) => {
  try {
    await axios.delete(base_url + "/books/" + req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting book:", err.message);
    res.status(500).send("Error deleting book");
  }
});

app.listen(5500, () => {
  console.log("Server started on port 5500");
});
