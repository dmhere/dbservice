import { access } from '@elementary/proper';
import { promisify } from 'util';
import ImageInfoSchema from '../models/imageInfo';
import CropImageInfo from '../models/cropImageInfo';
import VendorCoverHistory from '../models/vendorCoverPicHistory';
//import VendorMasterSchema from '../models/vendorMaster';
import storageEngine from '../utils/s3';
import { upsert } from '../utils/commonhelpers';

export const Uploader = storageEngine;

export default async (req, res) => {
  const response = res.create();
  const mConnection = response.memcacheConnection();
  let imageId;
  try {
    imageId = await ImageInfoSchema(response.sequelize)
      .build({
        image_height: req.body.height,
        image_width: req.body.width,
        resource_name: 'vendor_cover_pic',
        resource_id: req.params.vendorId,
        image_name: req.file.originalname,
        status: 1,
      })
      .save()
      .then(access('dataValues.id'));
  } catch (e) {
    response.success({ id: vendorId }).send();
  }

  const croppedImageId = await upsert(CropImageInfo(response.sequelize))
    .invoke(
      {
        height: req.body.height,
        width: req.body.width,
        top: req.body.y,
        left: req.body.x,
        original_image_id: req.body.imageId,
        cropped_image_id: imageId,
      },
      { original_image_id: req.body.imageId },
    )
    .then(access('dataValues.id'));

  const vendorCoverHistory = await VendorCoverHistory(response.sequelize)
    .build({
      vendor_id: req.params.vendorId,
      old_image_id: req.body.imageId,
      new_image_id: imageId,
      source: req.headers.source,
      spoc_id: req.body.spoc,
    })
    .save()
    .then(access('dataValues.id'));

  const VendorMaster = await VendorMasterSchema(response.sequelize).findOne({
    where: { id: req.params.vendorId },
  });

  const vendorId = await VendorMaster.update({ image_id: imageId }).then(access('dataValues.id'));
  
  try {
    const _ = await promisify(mConnection.del.bind(mConnection)).invoke(
      'vendor_profile_details_' + req.params.vendorId,
    );
    response.success({ id: vendorId }).send();
  } catch (e) {
    console.log(e);
    response.success({ id: vendorId }).send();
  }
};
