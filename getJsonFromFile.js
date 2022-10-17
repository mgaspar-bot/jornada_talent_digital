const fs = require('fs/promises')

async function getJsonFromFile () {
    var str = await fs.readFile('./csvs/prueba.csv');
    let json = {
        "Barri":"HS",
        "Data": { }
    };
    console.log(json);

    const fieldNames = ["Pob","PobHomes","PobDones","Pob25_64","Pob65","Titulats","65sola","Index","Parats","RendaFamiliar"]
    //recorre la string i extreu les entre comillas
    str = str.toString();
    str = str.split('\n');
    for (let i = 0; i < str.length; i++) {
        console.log(`index:${i}`);
       let line = str[i].split(';');
       console.log(`line:${line}`);
        if (i == 1) {
            json.Barri = line[1]
        }
       if (i > 1){
            json.Data[fieldNames[i-2]] = line[1]
       }
    }

    // await fs.writeFile(`./jsons/${json.Barri}.json`, JSON.stringify(json))
    console.log(`json: `);
    console.log(json);
    return json;
}

module.exports = getJsonFromFile;