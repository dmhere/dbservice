import Sequelize from 'sequelize';

const VendorActiveStatus = seq => seq.define('vendor_active_status', {
  show_on_search : Sequelize.BOOLEAN,
  transaction_enabled : Sequelize.BOOLEAN,
  genie_enabled : Sequelize.BOOLEAN,
  outstation_applicable : Sequelize.BOOLEAN,
}, { freezeTableName: true, createdAt: false, timestamps: false });

export default VendorActiveStatus;
