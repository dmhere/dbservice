import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import multer from 'multer';

const UploadFolder = 'uploads/';

const wedmegoodS3Client = new aws.S3({
  accessKeyId: process.env.AWSKEY,
  secretAccessKey: process.env.AWSSECRET,
  region: 'ap-south-1',
  s3ForcePathStyle: true,
});

const multipartStorageEngine = multer({
  dest: UploadFolder,
  storage: multerS3({
    s3: wedmegoodS3Client,
    bucket: 'wedmegood-prod',
    acl: 'public-read',
    cacheControl: 'max-age=31536000',
    key: (req, file, cb) => {
      const name = [
        req.params.mainUploadFolder,
        req.params.categoryKey,
        req.params.idKey,
        file.originalname,
      ].join('/');
      cb(null, name);
    },
  }),
});

export default multipartStorageEngine;
