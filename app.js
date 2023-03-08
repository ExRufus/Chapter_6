const express = require('express');
const router = require('./src/routes/router')
const expressLayouts = require('express-ejs-layouts');
const app = express();


app.use(router)
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views')
app.use(expressLayouts)

app.use(express.static('public'))

const port = 8080;
app.listen(port, () => {
    console.log(`Server running with on port htpp://localhost:8080`)
});