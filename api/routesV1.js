const Router = require('restify-router').Router;
// const { Router } = require('restify-router'); // Desestruturação da biblioteca (importando diretamente a classe Router)
const GameControllerV1 = require('./controllers/GameControllerV1');

const routerInstance = new Router();

routerInstance.post('/game', GameControllerV1.create);
routerInstance.patch('/game/:id', GameControllerV1.update);
routerInstance.get('/game', GameControllerV1.search);
routerInstance.del('/game/:id', GameControllerV1.remove);

module.exports = routerInstance;