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

// Render The (app.ejs File)
app.get("/", (req, res) => {
    res.render("./app.ejs");
});

// Display The All Data
app.post("/", (req, res) => {
    res.json(display());
});

// Display The Specific Data
app.post("/search", (req, res) => {
    res.json(display(req.body.key));
});

// Adding ID Of Specific Data To Asset[1]
app.post("/asset01", (req, res) => {
    asset[1] = req.body.id;
});

// Deleting a Specific Data
app.delete("/deleting", (req, res) => {
    deleting(req.body.id);
});

// Render The (from.ejs File)
app.get("/form", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.txt"));
    const message = data.find((value) => value.id === asset[1]);

    res.render("./form.ejs", message);
});

// Saving Data (db.txt)
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