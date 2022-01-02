const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { checkURL } = require('./Scrape');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.post('/scrapeURL', checkURL);

app.listen('8080', () => {
	console.log(`Server listening at http://localhost:8080`);
});
