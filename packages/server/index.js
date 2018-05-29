'use strict';

const express = require('express');
const request = require('request');

const app = express();
const apiServerHost = 'https://realtime.thetrainline.com/';

app.get('/departures', function(req, res) {
  req.pipe(request(`${apiServerHost}departures/wat`)).pipe(res);
});

app.get('/callingPattern', function(req, res) {
  req.pipe(request(req.query.url)).pipe(res);
});

app.listen(process.env.PORT || 4000);
