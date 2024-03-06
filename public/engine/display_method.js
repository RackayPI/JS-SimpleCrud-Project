import fs from 'node:fs';

function display(key = "") {
    const data = JSON.parse(fs.readFileSync("./db.txt"));
    const id = Object.getOwnPropertyNames(data);
    const message = {
        data: data,
        id: id,
        amount: id.length
    };

    if(key.length > 0) {
        message.data = {};
        for(let i = 0; i < message.amount; i++) {
            if(data[id[i]].userName.toLowerCase().includes(key)) {
                message.data[id[i]] = data[id[i]];
            }
        }
        message.id = Object.getOwnPropertyNames(message.data);
        message.amount = message.id.length;
    }

    return message;
}

export {display};