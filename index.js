var express = require("express");
var cors = require("cors");
var app = express();

const port = 54321;

app.use(cors());

let actual_data = [
  {
    id: 1,
    text: "Posude za cvijece",
    url:
      "https://cdn.myshoptet.com/usr/www.hotchilli.cz/user/shop/detail_alt_1/2664-1_pot-18l-30x30x30cm.jpg?5ae384e0"
  },
  {
    id: 2,
    text: "Zemlja za cvijece",
    url:
      "https://images-popusti.njuskalo.hr/data/image/500x705/5917/zemlja-za-cvijece-cca-50-l-kaufland-29584130.jpg"
  },
  {
    id: 3,
    text: "Dohrana za biljke",
    url:
      "http://www.napravivrt.hr/hr/imagelib/13/default/novice_z_vrta/2018/Plantella%20Cvet_1%20l.png"
  },
  {
    id: 4,
    text: "Drzaci suncobrana",
    url: "https://media.xxxlutz.com/i/xxxlutz/PIZtEDDJY5VGvy_wbwq-Mlog.jpg"
  }
];

let text =
  "Dolaskom sve ljepsih dana, provodit cemo vise vremena na otovrenom, zato vam iz ponude izdvajamo artikle koji ce vase trenutke ucinit ljepsima";

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/api/homepage/actual", (req, res) => {
  res.json({ items: actual_data, text: text });
});

app.listen(port, console.log(`Example app listening on port ${port}!`));
