let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');

// #1
// console.log("Hello world");
// #2
// app.get("/", function(req, res) {
//     res.send('Hello Express');
// });
    //#4
    app.use("/public", express.static(__dirname + "/public"))

    // #7
    app.use((req, res, next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
    })

    // #8 
    app.get('/now', (req, res, next)=>{
        req.time = {"time": new Date().toString()};
        next();
    }, (req, res)=>{
        res.send(req.time);
    });

//     // #3
    app.get("/", (req,res)=>{
     let absolutePath = __dirname + '/views/index.html'; 
     res.sendFile(absolutePath);
 })
    //#5
    // app.get('/json', (req, res)=>{
    //     res.json({"message": "Hello json"} )
    // })

    // #6 
    app.get("/json", (req, res)=>{
        if ( process.env['MESSAGE_STYLE'] == 'uppercase' ){
            res.json({"message": "HELLO JSON"} )
        }
        else {
            res.json({"message": "Hello json"} )
        }
    })

    // #9 
    app.get("/:word/echo", (req, res)=>{
        res.json({echo: req.params.word});
    })

    // #10 
    app.get('/name', (req,res)=>{
        res.json({name: req.query.first + " " + req.query.last })
    })

    // #11
  app.use(bodyParser.urlencoded({extended: false}))

  // #12 
  app.post('/name', (req,res)=>{
    res.json({name: req.body.first + " " + req.body.last })
  })

    


 


 




































 module.exports = app;
