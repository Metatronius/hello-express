'use strict';

const fs = require('fs'),
    path = require('path'),
    guestsPath = path.join(__dirname, 'guests.json'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.get('/guests', function(req, res)
{
    fs.readFile(guestsPath, 'utf8', function(err, guestsJSON)
    {
        if (err)
        {
            console.error(err.stack);
            return res.sendStatus(500);
        }

        let guests = JSON.parse(guestsJSON);
        res.send(guests);
    });
});

app.use(function(req, res)
{
    res.sendStatus(404);
});

app.listen(port, function()
{
    console.log('Listening on port', port);
});
