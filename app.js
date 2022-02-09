const luisData = require("./luis.json")
const express = require("express");

require("dotenv").config();

const app = express();

app.set("view engine", "hbs"); 

app.set("views", __dirname + "/views")

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/home", (req, res, next) => res.render("home"));

app.get("/about", (req, res, next) => res.render("about"));

app.get("/", (req, res, next) => 
//if you need specific format for data prepare it outside of the render and then render it
  res.render("index", luisData)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("🏃‍ on port 3000"));
