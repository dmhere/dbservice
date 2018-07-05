import Sequelize from 'sequelize';

const CropImageInfo = seq => seq.define('crop_image_info', {
  height: Sequelize.FLOAT,
  width: Sequelize.FLOAT,
  top: Sequelize.FLOAT,
  left: Sequelize.FLOAT,
  original_image_id: Sequelize.BIGINT(11),
  cropped_image_id: Sequelize.BIGINT(11),
}, { freezeTableName: true, updatedAt: false, createdAt: false });

export default CropImageInfo;
