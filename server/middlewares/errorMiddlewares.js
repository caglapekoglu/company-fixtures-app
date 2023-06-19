const authenticateUser = (req, res, next) => {
  if (req.url === '/auth' || req.url === '/list') {
      return next();
  }
  if (!req.session.userId) {
      res.redirect('/auth');
  } else {
      next();
  }
};

module.exports = {
  authenticateUser
};
