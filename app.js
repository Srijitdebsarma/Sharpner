const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));        //Body Parser Middleware
app.use(express.static('public'));                      //app.use(express.static('public'))

app.get('/', (req, res) => {
    // Read messages from the file and render the HTML template with the messages
    fs.readFile(path.join(__dirname, 'messages.txt'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file.');
        } else {
            const messages = data ? data.split('\n') : []; // Split data into an array of messages
            res.render('index', { messages });
        }
    });
});

app.post('/', (req, res) => {
    const message = req.body.message;
    if (!message) {
        res.status(400).send('No message provided.');
        return;
    }

    // Append the new message to the file
    fs.appendFile(path.join(__dirname, 'messages.txt'), message + '\n', 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('Error writing file.');
        } else {
            // Redirect to the homepage after submitting the message
            res.redirect('/');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
