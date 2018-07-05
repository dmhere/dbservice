export const upsert = Model => (values, condition) => {
  return Model.findOne({ where: condition }).then(obj => {
    if (obj) {
      // update
      return obj.update(values);
    } else {
      // insert
      return Model.create(values);
    }
  });
};
