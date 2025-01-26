const { Router } = require("express");

const indexRoute = Router();
const messages = [
    {
        id: 0,
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id: 1,
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        id: 2,
        text: "oo oo ah ah",
        user: "KeyboredApe",
        added: new Date()
    }
  ];
  
indexRoute.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));
indexRoute.get('/new', (req, res) => res.render("form"))
indexRoute.post('/new', (req, res) => {
    messages.push({ id: messages.length, text: req.body.messageText, user: req.body.messageUser, added: new Date() })
    res.redirect("/")
})
indexRoute.get('/messages/:id', (req, res) => {
    const { id } = req.params
    res.render("message", { message: messages[id]})
})

module.exports = indexRoute;