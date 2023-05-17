const app = require("./infrastructures/expressjs/app")

// Init database
try {
    require("./infrastructures/mongo/mongodb")
} catch (err) {
    console.log(err)
    process.exit()
}

// Run server
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});