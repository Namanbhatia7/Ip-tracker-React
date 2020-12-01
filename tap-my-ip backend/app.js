//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require('ejs');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({
    extended: true
}));



app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/home.html")

})

app.post("/", function (req, res) {
    res.sendFile(__dirname + "/home.html")
})

app.post("/result", function (req, res) {
    var ipAddress = req.body.ip;
    var URL = "http://ip-api.com/json/" + ipAddress

    request(URL, function (error, response, body) {
        var loc = JSON.parse(body)
        console.log(loc);

        res.send(body);
        // var loc = JSON.parse(body)
        // var country = loc.country;
        // var countryCode = loc.countryCode;
        // var region = loc.regionName;
        // var city = loc.city;
        // var zip = loc.zip;
        // var latitude = loc.lat;
        // var longitude = loc.lon;
        // var timezone = loc.timezone;
        // var isp = loc.isp;
        // var org = loc.org;
        // var asname = loc.as;

        

        // res.render('data', {
        //     country: country,
        //     countryCode: countryCode,
        //     regionName: region,
        //     cityName: city,
        //     zipCode: zip,
        //     lat: latitude,
        //     lon: longitude,
        //     timezone: timezone,
        //     isp: isp,
        //     organization: org,
        //     as: asname

        // });
    });
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on PORT 5000");
})