async function getStringFromFile(req, res, next) {
    var str = await fs.readFile('./prueba.csv');
    let json = {
        "Barri":"",
        "Data": {}
    };
    const fieldNames = ["Pob", "PobHomes","PobDones", "Pob65", "Titulats", "65sola", "RendaFamiliar", "Index", "Parats"]
    req.body["str"] = str;
    req.body["fieldNamesData"] = fieldNames;
    req.body[json] = json;
    next();
}

/*
Treu la string, i la posa a request per els seguents middles, tambe posa els fieldNames a utilitzar i el json de resposta buit
*/