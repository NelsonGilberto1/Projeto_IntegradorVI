//app.use('/produtos', produtoRoutes);
const express = require("express");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

app.use(express.json());
app.use("/produtos", produtoRoutes);

app.listen(3000);
