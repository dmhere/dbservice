import Sequelize from 'sequelize';

const ImageInfo = seq => seq.define('image_info', {
  id : { type: Sequelize.INTEGER, primaryKey: true },
  resource_name: Sequelize.STRING,
  resource_id: Sequelize.INTEGER,
  image_name: Sequelize.STRING,
  image_height: Sequelize.FLOAT,
  crop_left: Sequelize.FLOAT,
  crop_top: Sequelize.FLOAT,
  image_width: Sequelize.FLOAT,
  status: Sequelize.INTEGER,
  uploadedDate: { type: Sequelize.DATE, defaultValue: new Date() },
}, { freezeTableName: true, updatedAt: 'updated_at', createdAt: false });

export default ImageInfo;
