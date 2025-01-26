const express = require('express')
const indexRouter = require('./routes/indexRouter')
const path = require('path')
const app = express()

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "css")));
app.use("/", indexRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Mini message board is running on port: ${PORT}...`)
})