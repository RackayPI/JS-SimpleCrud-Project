import fs from 'node:fs';

function saving(content, assetId) {
    const data = JSON.parse(fs.readFileSync("./db.txt"));

    if(assetId === "new") {
        data.push({
            id: (data.length + 1).toString(),
            name: content.name,
            email: content.email,
            regDate: content.regDate
        });
    } else {
        data[assetId].name = content.name;
        data[assetId].email = content.email;
        data[assetId].regDate = content.regDate;
    }

    fs.writeFileSync("./db.txt", JSON.stringify(data));
}

export { saving };