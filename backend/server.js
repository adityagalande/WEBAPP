// const express = require('express')

import express from 'express';

const app = express()
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello USA!')
})

app.get('/api/joke', (req, res) => {

  const joke = [
    {
      id: 1,
      title: "First Joke",
      content: "This is first joke."
    },
    {
      id: 2,
      title: "Second Joke",
      content: "This is second joke."
    },
    {
      id: 3,
      title: "Third Joke",
      content: "This is third joke."
    },
  ]

  res.send(joke)
})

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
})