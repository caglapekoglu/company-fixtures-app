import jwt from 'jsonwebtoken';

const generateToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, "somethingsecret.jwt.secret", {
    expiresIn: '30d',
  });
};

export default generateToken;
