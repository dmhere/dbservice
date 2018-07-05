import Sequelize from 'sequelize';

const VendorStats = seq => seq.define('vendor_stats', {
  starting_price: Sequelize.STRING,
  reviews : Sequelize.INTEGER,
  ratings: Sequelize.DOUBLE,
  views : Sequelize.INTEGER,
  love_count : Sequelize.INTEGER,
  image_count : Sequelize.INTEGER,
}, { freezeTableName: true, createdAt: false, timestamps: false });

export default VendorStats;
