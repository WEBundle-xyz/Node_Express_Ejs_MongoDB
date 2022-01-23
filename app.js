const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
	res.setHeader('Content-type', 'text/html');
	next();
});

app.use((req, res, next) => {
	const userName = req.body.username || 'Unknown User';
	res.render('index', {
		user: userName,
	});
});

app.listen(3000);
