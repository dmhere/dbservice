import Express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import Memcached from 'memcached';
import logrevolver from 'logrevolver';

import upgradeResponse from './internals/upgradeResponse';
import { memcacheConnectPromise } from './utils/commonpromises';

import sequelize from './dbdriver';

// import log from './utils/log';
import routes from './routes';
import serverConfig from './config';
// Initialize the Express App
const app = new Express();
app.use(logrevolver());
// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

const memcached = new Memcached(process.env.MEMCACHE_SERVER);


// start app
sequelize
  .authenticate()
  .catch(e => console.log('Error while connecting to DB', e))
  .then(_ => memcacheConnectPromise(memcached, process.env.MEMCACHE_SERVER))
  .then(() => {
    upgradeResponse(app, sequelize, () => memcached).use(routes);
    app.listen(serverConfig.port, process.env.HOST, (error) => {
      if (error) {
        console.log('Something Went Wrong'); // eslint-disable-line
        return;
      }
      console.log(`Server running at ${serverConfig.port}`); // eslint-disable-line
    });
  });

export default app;
