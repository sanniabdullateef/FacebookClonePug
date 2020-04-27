module.exports = {
  getAdmin(req, res) {
    res.send("Admin Homepage");
  },
  adminHome(req, res) {
    res.render('index.pug', { title: 'Facebook Admin', greeting: 'Welcome Admin'});
  }
}