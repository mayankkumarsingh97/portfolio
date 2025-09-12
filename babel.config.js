// module.exports = {
//   presets: ["@babel/preset-env", "@babel/preset-react"]
// };
// babel.config.js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: process.env.NODE_ENV === 'development' ? ['react-refresh/babel'] : [],
};
//
//I have made some changes on remote of feat/dev-user-auth branch 
//
// In babel file
