import Sequelize from 'sequelize';

const filterOption = seq => seq.define('filter_option', {
  displayValue : Sequelize.STRING,
}, { freezeTableName: true, createdAt: false, timestamps: false });

export default filterOption;
