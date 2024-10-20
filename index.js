const express = require("express");
const ck = require("./query/cheker.js");
const db = require("./query/index.js");
const bodyParser = require("body-parser");
const msg = require("./query/send.js");

const app = express();
const tokens = process.env.TOKENS;
const cheker = new ck();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  const token = req.headers.token;
  if (tokens.includes(token)) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
});

app.get("/", async (req, res) => {
  res.send("HI SELAMAT DATANG..");
});

app.post("/jumlahKursi", async (req, res) => {
  const content = req.body;
  const kelas = content.kelas ? content.kelas : "Er0R";
  const limit = content.limit ? content.limit : 100;
  if (!cheker.isNumberonly([limit, kelas]))
    return res.send(
      msg(
        200,
        false,
        "pada bagian limit dan kelas, hanya angka saja yang diperbolehkan"
      )
    );
  try {
    const data = await db.read("bangku", "*", `kelas=${kelas}`, limit);
    res.send(msg(200, true, "kamu berhasil mengambil data", data));
  } catch {
    res.send(msg(409, true, "?"));
  }
});

app.post("/tambahKelas", async (req, res) => {
  const content = req.body;
  const kelas = content.kelas ? content.kelas : "Er0r";
  const jumlahKursi = content.jumlahKursi ? content.jumlahKursi : "Er0r";
  if (!cheker.isNumberonly([jumlahKursi, kelas]))
    return res.send(
      msg(
        200,
        false,
        "pada bagian limit dan kelas, hanya angka saja yang diperbolehkan"
      )
    );
  const kursi = [];
  for (let i = 0; i < jumlahKursi; i++) {
    kursi.push(0);
  }
  console.log(`{${kursi.join()}}`);

  try {
    const data2 = await db.insert(
      "bangku",
      "kelas,jumlah,statusbangku",
      `${kelas}, ${jumlahKursi}, '{${kursi.join()}}'`
    );
    res.send(
      msg(200, true, "kamu berhasil membuat data kursi", { kelas: data2 })
    );
  } catch (err) {
    res.send(msg(409, false, err));
  }
});

app.post("/perbaharuijumlahKursi", async (req, res) => {
  const content = req.body;
  const kelas = content.kelas ? content.kelas : "Er0r";
  const jumlahKursi = content.jumlahKursi ? content.jumlahKursi : "Er0r";

  if (!cheker.isNumberonly([jumlahKursi, kelas]))
    return res.send(
      msg(
        200,
        false,
        "pada bagian limit dan kelas, hanya angka saja yang diperbolehkan"
      )
    );

  try {
    const dat = await db.read("bangku", "*", `kelas=${kelas}`, 1);
    const kursi = dat.rows[0].statusbangku;
    let baru;
    if (kursi.length > jumlahKursi) {
      baru = kursi.slice(0, -(kursi.length - jumlahKursi));
    } else {
      for (let i = kursi.length; i < jumlahKursi; i++) {
        kursi.push(0);
      }
      baru = kursi;
    }
    const data1 = await db.update(
      "bangku",
      "statusbangku",
      `'{${baru.join()}}'`,
      `kelas=${kelas}`
    );
    const data2 = await db.update(
      "bangku",
      "jumlah",
      jumlahKursi,
      `kelas=${kelas}`
    );
    res.send(
      msg(200, true, "kamu berhasil membuat data kursi", {
        updatePembelian: data1,
        upadteKelas: data2,
      })
    );
  } catch {}
});

app.get("/kodebayar", async (req, res) => {
  res.send(msg(200, true, ""));
});

app.post("/mengubahkondisi", async (req, res) => {
  const content = req.body;
  const statusbangku = content.statusbangku ? content.statusbangku : "Er0r";
  const kelas = content.kelas ? content.kelas : "Er0r";

  const dat = await db.read("bangku", "*", `kelas=${kelas}`, 1);
  // console.log(dat.rows[0].statusbangku)
  if (dat.rows[0].statusbangku.length != statusbangku.length)
    return res.send(msg(200, false, "panjang array tidak sama"));

  try {
    const data1 = await db.update(
      "bangku",
      "statusbangku",
      `'{${statusbangku.join()}}'`,
      `kelas=${kelas}`
    );
    res.send(msg(200, true, "", data1));
  } catch {
    res.send(msg(403, false, ""));
  }
  // res.send(msg(200, true, ""))
});

app.listen(7898, () => {
  console.log(`liset to port 7898`);
});
