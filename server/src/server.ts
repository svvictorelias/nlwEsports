import express from 'express'

const app = express()

app.get('/ads', (request, response)=>{
  return response.json([
    {id:1, name: 'Anuncion 1'},
    {id:2, name: 'Anuncion 2'},
    {id:3, name: 'Anuncion 3'},
    {id:4, name: 'Anuncion 4'},
  ])
})

app.listen(3333)