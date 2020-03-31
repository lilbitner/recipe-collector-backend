const express = require('express')
const app = express()

// const port = process.env.PORT 
app.listen(3000, () => console.log('Listening on 3000'))

app.get('/', (req, res) => {
    res.send('Hello!')
})