const jwt= require("jsonwebtoken");
const { createError } =require("./error.js");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "somethingsecret.jwt.secret", (err, user) => {

      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;
      next();
    });

  } else {
    return next(createError(401, "You are not authenticated!"));
  }

};

 const verifyUser = (req, res, next) => {

  verifyToken(req, res, () => {
next();
    // if (req.user?.id === req.params?.id || req.user?.admin1 || req.user?.admin2 || req.user?.admin3 || req.user?.admin4) {
    //   next();
    // } else {
    //   return next(createError(403, "You are not authorized to access this!"));
    // }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    next();    // if (req.user?.admin1 || req.user?.admin2 ||req.user?.admin3 || req.user?.admin4) {
    //   next();
    // } else {
    //   return next(createError(403, "You are not authorized!"));
    // }
  });
};
module.exports={verifyToken,verifyAdmin,verifyUser}
