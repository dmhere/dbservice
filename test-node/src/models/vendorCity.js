import Sequelize from 'sequelize';

const VendorCity = seq => seq.define('vendors_cities', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  vendor_id: Sequelize.INTEGER,
}, { freezeTableName: true, createdAt: false, timestamps: false });

export default VendorCity;
