const
    express = require('express'),
    app     = express(),
    cors    = require('cors'),
    path    = require('path'),
    port    = process.env.PORT || 3000;
    // compass = require('node-compass');



// * Config
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// * Default routes
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'public/index.html'));
});

// * Run server
app.listen(port, () => {
console.log('App has been started in port: 3000');
});  