const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

// This will read the variables and save them in nodejs environment variables

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
