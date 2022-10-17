const fs = require('fs/promises')

async function getJsonFromFile (id) {
    
    var str = await fs.readFile(`./csvs/barris${id}.csv`);
    // console.log(str);
    let json = {
        "Barri":"HS",
        "Data": { }
    };
    console.log(json);

    const fieldNames = ["Pob","PobDones","PobHomes","Pob25_64","Pob65","Titulats","65sola","Index","Parats","RendaFamiliar"]
    //recorre la string i extreu les entre comillas
    str = str.toString('utf-8');
    str = str.split('\n');
    for (let i = 0; i < str.length; i++) {
        console.log(`index:${i}`);
       let line = str[i].split(';');
       console.log(`line:${line}`);
        if (i == 1) {
            json.Barri = line[2]
        }
       if (i > 1){
            json.Data[fieldNames[i-2]] = line[2]
       }
    }
    // await fs.writeFile(`./jsons/${json.Barri}.json`, JSON.stringify(json))
    // console.log(`json: `);
    // console.log(json);
    // console.log(json.Barri);
    // console.log(json.Data);
    return json;
}

async function getAllJsonFromFile (id) {
    const fileNames = await fs.readdir('./csvs');
    let json2 = {
        "allBarris":[]
    }
    for (fileName of fileNames) {
        var str = await fs.readFile(`./csvs/${fileName}`);
        // console.log(str);
        let json = {
            "Barri":"HS",
            "Data": { }
        };
        const fieldNames = ["Pob","PobDones","PobHomes","Pob25_64","Pob65","Titulats","65sola","Index","Parats","RendaFamiliar"]
        //recorre la string i extreu les entre comillas
        str = str.toString('utf-8');
        str = str.split('\n');
        for (let i = 0; i < str.length; i++) {
            console.log(`index:${i}`);
        let line = str[i].split(';');
        console.log(`line:${line}`);
            if (i == 1) {
                json.Barri = line[2]
            }
        if (i > 1){
                json.Data[fieldNames[i-2]] = line[2]
        }
        }
        json2.allBarris.push(json);
    }
    return json2;
}

module.exports = {getJsonFromFile, getAllJsonFromFile}