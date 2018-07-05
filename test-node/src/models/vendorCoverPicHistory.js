import Sequelize from 'sequelize';

const VendorCoverHistory = seq => seq.define('vendor_cover_pic_history', {
  vendor_id: Sequelize.INTEGER,
  old_image_id: Sequelize.INTEGER,
  new_image_id: Sequelize.INTEGER,
  source: Sequelize.INTEGER,
  spoc_id: Sequelize.INTEGER,
  created_at: { type: Sequelize.DATE, defaultValue: new Date() },
}, { freezeTableName: true, updatedAt: false, createdAt: 'created_at' });

export default VendorCoverHistory;
