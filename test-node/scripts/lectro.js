const LectroCommonutils = require('@lectro/enhancer-commonutils');
const ExpressHelpers = require('lectro-enhancer-express-helpers/lib/enhancer');
const Lectro = require('@lectro/core');

const lectro = new Lectro('node');
const WMGGQL = lectro.use(LectroCommonutils).use(ExpressHelpers.default);

module.exports = WMGGQL;
