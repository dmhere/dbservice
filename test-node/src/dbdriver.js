import Sequelize from 'sequelize';

export default new Sequelize('wedmegood_symfony', 'root', 'dm', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

