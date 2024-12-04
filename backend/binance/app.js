const express = require("express");
const app = express();
const dotenv = require("dotenv"); // Importez dotenv

dotenv.config("./././.env"); // Chargez les variables d'environnement à partir du fichier .env
console.log(process.env.SERVICE_BINANCE_PORT);
const PORT = process.env.SERVICE_BINANCE_PORT || 5002;

app.use(express.json());
app.use("/", require("./routes"));

app.listen(process.env.SERVICE_BINANCE_PORT, () => {
  console.log(
    `Binance service is running on port ${process.env.SERVICE_BINANCE_PORT}`
  );
});
