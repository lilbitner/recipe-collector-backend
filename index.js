const express = require('express')
const queries = require('./queries')
const app = express()

// const port = process.env.PORT 
app.listen(3000, () => console.log('Listening on 3000'))

app.get('/', (req, res) => {
    queries.listAll().then(recipes => res.send(recipes))
})

app.get('/users', (req, res) => {
    queries.listUsers().then(users => res.send(users))
})

