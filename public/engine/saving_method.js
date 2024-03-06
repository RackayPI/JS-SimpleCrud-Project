import fs from 'node:fs';

function saving(object, assetId) {
    const data = JSON.parse(fs.readFileSync("./db.txt"));
    const count = Object.getOwnPropertyNames(data).length;

    if(assetId === "new") {
        data[count + 1] = object;
    } else {
        data[assetId] = object;
    }

    fs.writeFileSync("./db.txt", JSON.stringify(data));
}

export { saving };