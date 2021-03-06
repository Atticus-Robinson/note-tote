const apiRoutes = require("./routes/apiRoutes/noteRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


const fs = require("fs");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API Server is now on port ${PORT}~`);
});