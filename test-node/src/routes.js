// @flow
import { Router } from 'express';
import { reqMutate } from 'express-helpers';
import coverPicUploadSuccess, { Uploader } from './routes/coverpicupload';
import getdata from './routes/getvendordata'

const router = new Router();

router.route('/').get((req, res) => {
  res
    .create('Server Working Fine')
    .success()
    .send();
});

router
  .route('/upload-cover-pic/:vendorId')
  .post(
    reqMutate(
      req => (req.params.mainUploadFolder = 'uploads'),
      req => (req.params.categoryKey = 'vendor_cover_pic'),
      req => (req.params.idKey = req.params.vendorId)
    ),
    Uploader.single('vendor-profile-pic'),
    coverPicUploadSuccess,
  );

/*By Dheeraj for elasticsearch*/
router.route('/upload-data').get(getdata);

  

export default router;
