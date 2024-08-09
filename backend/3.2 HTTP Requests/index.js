import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("Hello world!");
});

app.get("/contacts", (req, res) => {
    res.send("<h1>phone number</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>i am robert</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});