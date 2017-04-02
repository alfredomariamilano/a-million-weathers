const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const cors       = require('cors');

const app        = express();
const port       = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cors());

app.get('/*', (req, res) =>  res.sendFile(__dirname + '/index.html'));

app.listen(port, () => console.log(`Express started on port: ${port}`));

module.exports = app;
