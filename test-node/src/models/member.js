import Sequelize from 'sequelize';

const Member = seq => seq.define('member', {
  slug : Sequelize.STRING
}, { freezeTableName: true, createdAt: false, timestamps: false });

export default Member;
