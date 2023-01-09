function sessionAuth(req, res, next) {
  //set variables for every pug file
  //interceptor
  res.locals.session = req.session.user;
  next();
}

module.exports = sessionAuth;
