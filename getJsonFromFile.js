const fs = require('fs/promises')

async function getJsonFromFile () {
    var str = await fs.readFile('./prueba.csv');
    let json = {
        "Barri":"",
        "Data": {}
    };

    //parse str
    str = str.toString();
    str = str.split('\n');
    for (let i = 0; i < str.length; i++){
        let line = str[i].split(',');
        if ( i == 1) {
            json.Barri = line[1];
        }
        if ( i > 1) {
            json.Data[line[0]] = line[1];
        }
        console.log(line);
        console.log(i);
    }
    console.log(json);
    return json;
}



module.exports = getJsonFromFile;