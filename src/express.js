var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer')

var JSONparser = bodyParser.json();

let port = 3001


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');


    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {

        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.post('/send',JSONparser, function (req, res) {




         let  transporter =  nodemailer.createTransport({

             host: "*******",
             port: 465,
             secure: true,
             auth: {
                 user: "*******",
                 pass: "*******"
             }
         });

         const mail = {
             from:req.body.email,
             to:'********',
             subject:req.body.subject,
             text:req.body.text,
             html:'<h2>'+req.body.sender+'</h2><hr>'+
                   '<p>'+req.body.text+'</p>'

         }

         transporter.sendMail(mail)

         transporter.close()








})



app.listen()

