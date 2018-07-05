import path from 'path';

const config = {
  port: process.env.PORT || 8001,
  logFileDir: path.join(__dirname, '../log'),
  logFileName: 'app.log',
};

export default config;
