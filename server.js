const express = require('express');
const app = express();

const getJsonFromFile = require('./getJsonFromFile').getJsonFromFile
const getAllJsonFromFile = require('./getJsonFromFile').getAllJsonFromFile

// const json = getJsonFromFile();


app.get('/:id', async (req, res) => {
    const json = await getJsonFromFile(req.params.id)
    res.status(200).send(json);
})
app.get('/', async (req, res) => {
    const json2 = await getAllJsonFromFile("all");
    res.status(200).send(json2);
})

setTimeout(() => {app.listen(process.env.PORT, ()=> console.log(`server escoltant al port ${process.env.PORT}`))}, 1000)