import { pick } from '@elementary/proper';

/*
  Change in this class can break the whole App,
  Handle with Care
*/

class Response extends Transformer {
  constructor(data, message, status) {
    super();
    this.message = message;
    this.status = status;
    this.data = data;
    this.res = null;
  }

  eligibleProperties = ['data', 'message', 'status', 'error']

  captureOrignalResponse(res) {
    return this.mutate((self) => {
      self.res = res;
    });
  }

  captureConnection(fn) {
    return this.mutate(fn);
  }

  captureSequelize(seq) {
    return this.mutate((self) => {
      self.sequelize = seq;
    });
  }

  send() {
    if (!this.res.json) {
      throw new Error('Cannot Call send Response before create');
    }
    this.res.json(pick(this.eligibleProperties, this));
  }

  success(data) {
    return this.mutate((self) => {
      self.status = 200;
      self.message = 'Success';
      self.data = data;
    });
  }

  forbidden(error) {
    return this.mutate((self) => {
      self.status = 403;
      self.message = 'Not Allowed';
      self.error = error;
      delete self.data;
    });
  }

  notfound(error) {
    return this.mutate((self) => {
      self.status = 404;
      self.message = 'Not Found';
      self.error = error;
      delete self.data;
    });
  }

  badrequest(error) {
    return this.mutate((self) => {
      self.status = 400;
      self.message = 'Bad Request';
      self.error = error;
      delete self.data;
    });
  }

  internalerror(error) {
    return this.mutate((self) => {
      self.status = 500;
      self.message = 'Internal Server Error';
      self.error = error;
      delete self.data;
    });
  }
}

export default Response;
