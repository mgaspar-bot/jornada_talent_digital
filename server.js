const express = require('express');
const app = express();

const getJsonFromFile = require('./getJsonFromFile');

// const json = getJsonFromFile();


app.get('/', async (req, res) => {
    
    const json = await getJsonFromFile()
    // res.status(200).send({
    //     "Barri":"Raval",
    //     "Data":{
    //         "Pob":3,
    //         "PobHomes":1,
    //         "PobDones":2,
    //         "Pob65":3,
    //         "titulats":1,
    //         "65sola":1,
    //         "RendaFamiliar":45,
    //         "Index":3,
    //         "Parats":2
    //     }
    // })
    // const json = await getJsonFromFile();
    res.status(200).send(json);
})

setTimeout(() => {app.listen(process.env.PORT, ()=> console.log(`server escoltant al port ${process.env.PORT}`))}, 1000)