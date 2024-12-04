const express = require("express");
const cors = require("cors");
const app = express();
const gatewayRoutes = require("./routes/gatewayRoutes");
const dotenv = require("dotenv"); // Importez dotenv
dotenv.config(); // Chargez les variables d'environnement à partir du fichier .env

// Middleware pour activer CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "RefreshToken", "Key"],
    credentials: true,
  })
);

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Montage des routes de la gateway
app.use("/", gatewayRoutes);

// Route de test
app.get("/", (req, res) => {
  res.send("Welcome to API gateway !");
});

// Démarrez le serveur
const PORT = process.env.GATEWAY_PORT;
app.listen(PORT, () => {
  console.log(
    `API Gateway started on ${PORT} et let pass ${process.env.FRONTEND_URL}`
  );
});
