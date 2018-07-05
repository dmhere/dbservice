import Sequelize from 'sequelize';

const VendorCategory = seq => seq.define('vendor_category', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  category_name : Sequelize.STRING,
  category_slug : Sequelize.STRING,
  category_alias : Sequelize.STRING,
}, { freezeTableName: true, createdAt: false, timestamps: false });

export default VendorCategory;
