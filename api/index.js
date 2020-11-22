const restify = require('restify');
const gameRouterV1 = require('./routesV1');
const server = restify.createServer();
const Logger = require('./logger')('SERVER');

gameRouterV1.applyRoutes(server, '/ec021/v1/api');

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.use(Logger.printRequest);

server.listen(3000, function () {
    console.log("API rodando...");
});