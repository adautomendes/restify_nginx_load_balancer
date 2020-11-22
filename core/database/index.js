const DB_URL = 'mongodb://mongo-db:27017/';

const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    dbName: 'restify_nginx_load_balancer'
};

module.exports = {
    DB_URL,
    DB_CONFIG
}