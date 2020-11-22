const restify = require('restify');
const mongoose = require('mongoose');
const DB = require('./database');
const gameRouterV1 = require('./routesV1');
const server = restify.createServer();
const Logger = require('./logger')('CORE');

gameRouterV1.applyRoutes(server, '/core/v1');

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.use(Logger.printRequest);

server.listen(5000, function () {
    console.log("Servidor rodando...");

    // Efetivar a conexão com o BD
    mongoose.connect(DB.DB_URL, DB.DB_CONFIG, function(error) {
        if(!error) {
            console.log(`MongoDB Conectado`);
        } else {
            console.log(`Erro ao conectar no MongoDB: ${error}`);
        }
    });
});