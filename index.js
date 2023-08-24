const express = require('express')
const mongoose  = require('mongoose')
const app = express()
app.use(express.json({extended: true}))
app.use(express.urlencoded())
const port = 3000

mongoose.connect('mongodb+srv://Notebooks:note123@haye.e3bkjde.mongodb.net/?retryWrites=true&w=majority', function(error){
  if(!error){
    console.log('Succesfully connected')
  }
});

app.get('/', (req, res) => {
  res.sendFile("pages/index.html", {root: __dirname})
})

app.post('/login', (req, res) => {
    res.sendFile("pages/signup.html", {root: __dirname})  })

  app.post('/signup', (req, res) => {
    res.sendFile("pages/signup.html", {root: __dirname})  })

    app.post('/addnotes', (req, res) => {
        const{userToken} = req.body
        res.sendFile("pages/signup.html", {root: __dirname})  })

        app.post('/deletenote', (req, res) => {
            const{userToken} = req.body
            res.sendFile("pages/signup.html", {root: __dirname})  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
}) 