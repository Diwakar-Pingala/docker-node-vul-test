
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
    {
        name: 'Alice',
        email: 'Alice@gmail.com'
    },
  {
        name: 'Bob',
        email: 'Bob@yahoo.com'
    },
  {
        name: 'Chris',
        email: 'Chris@outlook.com'
    },
  {
        name: 'Dave',
        email: 'Dave@rediff.com'
    },]
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
