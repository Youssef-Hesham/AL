const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const clients = require("./routes/clients");
const carousle = require("./routes/carousle");
const partners = require("./routes/partners");
const news = require("./routes/news");
const app = express();
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost/Al-Sharief")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(cors());
app.use("/api/clients", clients);
app.use("/api/carousele", carousle);
app.use("/api/partners", partners);
app.use("/api/news", news);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
