const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('./data/users');

server.get('/api/users', (req, res, next) => {
    resizeTo.status(200).send(userData.getUsers);
});

server.listen(3000, () => {
    console.log('JSON server listening on posrt 3000');
})