const express = require('express');
const {getShows, addShow, editShow, deleteShow} = require('./Controller/showController')
const app = express();

app.use(express.json());

app.get('/api/shows' , getShows)

app.post('/api/shows', addShow)

app.put('/api/shows/:id/:review', editShow)

app.delete('/api/shows', deleteShow)



app.listen(5050, ()=> console.log('Server listening on port 5050'))