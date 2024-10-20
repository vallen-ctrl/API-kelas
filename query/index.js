const pg = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const { Client } = pg;
const host = "192.168.100.64";
const port = 5432;
const dbName = "class";
globalThis.client = new Client({
  user: process.env.dbUser,
  password: process.env.dbPasswd,
  host: host,
  port: port,
  database: dbName,
});

/* 
    pada bagian ini, program akan membaca semua file yang ada di dalam CMD
    dan mencari file yang berakhiran dengan .js
*/
const cmdPath = path.join(__dirname, "cmd/")
let files = fs.readdirSync(cmdPath).filter(f => f.endsWith(".js"))
let command = {};
for(let i in files){
    command[files[i].replace(".js", "")] = require(path.join(cmdPath, files[i]))
}

client.connect();
module.exports = command;


