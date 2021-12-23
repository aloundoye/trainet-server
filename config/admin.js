module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a0a357f3ba7574cd1fb3dfa773a656fc'),
  },
});
