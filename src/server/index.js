projectData = {}

const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
var aylien = require("aylien_textapi");


/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());


var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });



app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Listening on port 8081!')
})

app.get("/showResults", function (req, res){
  //return projectData for display in the UI
  res.send(projectData);
})

app.post('/callNLP', function (req, res) {
    textapi.sentiment({
        'url': req.body.url
      }, function(error, response) {
        if (error === null) {
          newEntry = {
            polarity: response.polarity,
            subjectivity: response.subjectivity,
            text: response.text,
            polarity_confidence: response.polarity_confidence,
            subjectivity_confidence: response.subjectivity_confidence
          }
          projectData = newEntry;
          res.send(newEntry);
        }
        else{
          //process error
          console.log(error);
          alert('Unable to check page at this time');
        }
      });
})
