import { validationResult } from 'express-validator/check';

/*
  Important Routing Code,
  Handle with Care will break all the routes if modifed in a wrong way
*/

const withValidator = router => (path, validations) =>
  router.use(path, validations, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.create().badrequest(errors.mapped()).send();
    }
    next();
    return null;
  });

export default withValidator;
