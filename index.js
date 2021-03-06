import express from "express";
import bodyParser from "body-parser";

import guestsRoutes from "./routes/guests.js";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use("/guests", guestsRoutes);

app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
