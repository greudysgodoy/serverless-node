const dotenv = require('dotenv');
dotenv.config();
const app = require('./api')


app.listen(3001, () => {
  console.log('app running')
})