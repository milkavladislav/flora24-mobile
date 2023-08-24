const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Спеціальний обробник для маршруту /login
server.post('/login', (req, res) => {
  const user = server.db
    .get('users')
    .find({ username: req.body.username })
    .value();

  if (user && user.password === req.body.password) {
    console.log(user)
    const token = user.token;
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
