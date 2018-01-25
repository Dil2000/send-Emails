	var express = require('express');
	var email = require('emailjs');

  app.get('/email', function(req, res){
    var server = email.server.connect({
      user: "email@gmail.com",
      password: "password",
      host: "smtp.gmail.com",
      ssl: true
    });

		server.send({
		  text:    "i hope this works", 
		  from:    "My Name", 
		  to:      "senderName <senderEmail>",
		  cc:      "anotherName <anotherEmail>",
		  subject: "testing emailjs"
		}, function(err, message) { console.log(err || message); });

	});

	app.listen(3000);
	console.log('Listening on port 3000');