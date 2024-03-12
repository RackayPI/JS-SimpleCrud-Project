import fs from 'node:fs';

function display(key = "") {
    const data = JSON.parse(fs.readFileSync("./db.txt"));
    let message = data;
    
    if(key.length !== 0) {
        message = data.filter((value) => value.name.toLowerCase().includes(key));
    }

    return message;
}

export {display};