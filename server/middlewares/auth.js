// middleware/auth.js

const authMiddleware = (req, res, next) => {
    res.redirect('/login'); // login sayfasına yönlendir

    // if (req.session && req.session.userId) { // kullanıcı giriş yapmışsa
    //     next(); // bir sonraki middleware'e veya işleme devam et
    //   } else { // kullanıcı giriş yapmamışsa
    //     res.redirect('/login'); // login sayfasına yönlendir
    // }
  };
  module.exports= authMiddleware