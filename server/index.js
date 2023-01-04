const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const clients = require("./routes/clients");
const carousle = require("./routes/carousle");
const partners = require("./routes/partners");
const news = require("./routes/news");
const user = require("./routes/user");
const education = require("./routes/education");
const enviromental = require("./routes/enviroment");
const life = require("./routes/life");
const material = require("./routes/material");
const pcb = require("./routes/Pcb");
const restoration = require("./routes/restoration");
const supplies = require("./routes/supplies");
const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json());
app.use(cors());
app.use("/api/clients", clients);
app.use("/api/carousle", carousle);
app.use("/api/partners", partners);
app.use("/api/news", news);
app.use("/api/user", user);
app.use("/api/education", education);
app.use("/api/enviromental", enviromental);
app.use("/api/life", life);
app.use("/api/material", material);
app.use("/api/pcb", pcb);
app.use("/api/restoration", restoration);
app.use("/api/supplies", supplies);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
