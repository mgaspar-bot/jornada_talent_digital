const fs = require('fs/promises')

async function getJsonFromFile () {
    var str = await fs.readFile('./csvs/prueba.csv');
    let json = {
        "Barri":"",
        "Data": { }
    };

    const fieldNames = ["Pob", "PobHomes","PobDones", "Pob65", "Titulats", "65sola", "RendaFamiliar", "Index", "Parats"]

    for (let i = 0; i < str.length; i++) {
        
    }


    await fs.writeFile(`./jsons/${json.Barri}.json`, JSON.stringify(json))
    return json;
}



module.exports = getJsonFromFile;