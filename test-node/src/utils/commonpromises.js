export const memcacheConnectPromise = (memcache, args) => new Promise((resolve, reject) => {
  memcache.connect(args, (err, conn) => {
    if (err) {
      reject();
      return;
    }

    resolve(conn);
  });
});

export const IDP = data => Promise.resolve(data);
