import fs from 'node:fs';

function deleting(id) {
    const data = JSON.parse(fs.readFileSync("./db.txt"));
    delete data[id];
    fs.writeFileSync("./db.txt", JSON.stringify(data));
}

export { deleting };