/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express.Router();
	app.use( bodyParser.json() );       // to support JSON-encoded bodies

	//default 
	app.get("/", function(req, res) {
		console.info("[GET] /");
		res.type("text/plain").status(200).send("TO BE DEFINED");
	});

	return app;
};

