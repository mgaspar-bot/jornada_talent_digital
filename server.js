const express = require('express');
const app = express();

const getJsonFromFile = require('./getJsonFromFile');

// const json = getJsonFromFile();


app.get('/:id', async (req, res) => {
    const json = await getJsonFromFile(req.params.id)
    res.status(200).send(json);
})
app.get('/', async (req, res) => {
    const json2 = await getJsonFromFile("all");
    res.status(200).send(json);
})

setTimeout(() => {app.listen(process.env.PORT, ()=> console.log(`server escoltant al port ${process.env.PORT}`))}, 1000)