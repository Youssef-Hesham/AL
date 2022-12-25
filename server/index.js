const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const clients = require("./routes/clients");
const carousle = require("./routes/carousle");
const partners = require("./routes/partners");
const news = require("./routes/news");

const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json());
app.use(cors());
app.use("/api/clients", clients);
app.use("/api/carousele", carousle);
app.use("/api/partners", partners);
app.use("/api/news", news);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
