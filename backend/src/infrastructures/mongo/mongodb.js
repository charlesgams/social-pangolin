const mongoose = require("mongoose");

// !!!!! URL mis en dur pour le test mais l'utilisation de variables d'environment recommandé
mongoose
  .connect("mongodb://root:example@localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected..."));
