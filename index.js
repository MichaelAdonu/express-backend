const express = require('express');

const app = express();

const port = 8000;

app.listen(port, (req, res) => {
	console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
	res.send('This is a Get method to get all data');
});

app.get('/:id', (req, res) => {
	res.send('This is a Get method to get a Single Item');
});

app.post('/users', (req, res) => {
	res.send('This is a post method to Create a User');
	console.log(req.body);
});

app.patch('/product/:id', (req, res) => {
	res.send('This is a Patch method to Update a product');
});

app.delete('/product/:id', (req, res) => {
	res.send('This is a Delete method to Delete a specific product');
});
