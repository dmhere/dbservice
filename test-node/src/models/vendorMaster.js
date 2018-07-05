import Sequelize from 'sequelize';

const VendorMaster = seq => seq.define('vendor_master', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  image_id: Sequelize.INTEGER,
  name : Sequelize.STRING,
  contact : Sequelize.STRING,
  member_id : Sequelize.INTEGER,
  status : Sequelize.STRING,
  information : Sequelize.TEXT,
}, { freezeTableName: true, createdAt: false });


export default VendorMaster;
