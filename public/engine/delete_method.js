import fs from 'node:fs';

function deleting(id) {
    const data = JSON.parse(fs.readFileSync("./db.txt"));
    const index = data.findIndex((value) => value.id === id)
    data.splice(index, 1);
    fs.writeFileSync("./db.txt", JSON.stringify(data));
}

export { deleting };