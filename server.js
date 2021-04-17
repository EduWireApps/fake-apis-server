const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3500;

server.use(middlewares);

server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  if (req.method === 'POST') {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = 'GET'
    req.query = req.body
  }
  // Continue to JSON Server router
  next()
})

// If you need to scope this behaviour to a particular route, use this
server.post('/posts', function (req, res, next) {
  req.method = 'GET'
  req.query = req.body
  next()
})

server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
