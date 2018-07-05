import Response from './responseconstuctor';

const upgradeResponse = (app, sequelize, memcacheConnection) => app.use((req, res, next) => {
  res.create = data => new Response(data).captureOrignalResponse(res).captureSequelize(sequelize)
    .captureConnection(reqObject => reqObject.memcacheConnection = memcacheConnection);
  next();
});

export default upgradeResponse;
