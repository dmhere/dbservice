/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
// Figure out why two eslint-disable

if (process.env.NODE_ENV === 'development') {
  Object.assign(process.env, require('./constants'));
  require('./scripts/start');
}

if (process.env.NODE_ENV === 'production') {
  Object.assign(process.env, require('./constants'));
  require('./build/main');
}
