import express from "express";
import bodyParser from "body-parser";
import fs from 'node:fs';

import {display} from "./public/engine/display_method.js"
import {deleting} from "./public/engine/delete_method.js"
import {dataValidator} from "./public/engine/dataValidator_method.js"
import {saving} from "./public/engine/saving_method.js"

const app = express();
const asset = [];
const port = 3000;

app.use(express.static("./public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("./app.ejs");
});

app.post("/", (req, res) => {
    res.json(display());
});

app.post("/display", (req, res) => {
    res.json(display(req.body.key));
});

app.post("/asset01", (req, res) => {
    asset[1] = req.body.id;
});

app.delete("/deleting", (req, res) => {
    deleting(req.body.id);
});

app.get("/form", (req, res) => {
    res.render("./form.ejs");
});

// Under Construction 
app.post("/form", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.txt"));

    if(asset[1] !== "new") {
        res.json(data[asset[1]]);
    } 
});

app.post("/saving", (req, res) => {
    const data = {
        condition: false,
    }

    if(!dataValidator(req.body)) {
        data.condition = true;
        res.json(data);
    } else {
        res.json(JSON.stringify(data));

        saving(req.body, asset[1]);
    }
});

app.listen(port);