var express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("pad");
});

app.get("/:id", function (req, res) {
  res.render("pad");
});

// var sharejs = require("share");
// set up redis server
// var redisClient;
// console.log(process.env.REDISTOGO_URL);
// redisClient = require("redis");

// var options = {
//   db: { type: 'redis' }
// };

// sharejs.server.attach(app, options);

var port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server listining to port 8000");
});
