const express = require('express')
const app = express()
const collection = require('./data.js')

const valid_keys = require('./valid_keys.js')
const cors = require('cors');
app.use(cors());

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})



// app.get('/', function (req, res) {
//     res.send('GET request to homepage')
// })

app.get('/contact', function (req, res) {
    res.send('Hi there, here is my <a href="mailto:nabil_alrousan@bcit.ca"> email </a>.')
})


// app.get('/', function (req, res) {
//     res.write(`Weather of ${req.query["q"]} is 4.8 Celsius. `);
//     res.write(`Your API key is ${req.query["appid"]} . `);
//     res.send();
// })

// app.get('/', function (req, res) {
//     res.json(
//         {
//             "weather": [
//                 {
//                     "temp": 61.5
//                 }
//             ],
//             "desc": "cloudy"

//         }
//     );
// })

app.get('/', function (req, res) {
    // console.log(collection["cities"])

    if (valid_keys["keys"].find(
        (key) => key == req.query["appid"]
    )) {
        res.json(collection["cities"].find(
            (city) => city.name == `${req.query["q"]}`
        ))
    } else {
        res.send("Invalid key");
    }

})