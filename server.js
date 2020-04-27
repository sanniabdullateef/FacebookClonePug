const server = require('./app');
const port = 5555;



server.listen(port, () => {
  console.log(`Server started on ${port}`);
});