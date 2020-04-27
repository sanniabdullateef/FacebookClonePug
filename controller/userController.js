module.exports = {
  getUser(req, res) {
      return res.send(req.params.username);
  },
  userHome(req, res){
    res.render('index.pug', { greeting: 'Hello World' });
  },
  loginPage(req, res){
    console.log('ola');
    // res.render('loginNavbar.pug', {greeting: ' Welcome to you Homeoage'})
    res.redirect('/loginNavbar')
  },
  loginNavbar(req,res) {
    res.render('loginNavbar.pug')
  }
}