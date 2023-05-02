const cloudinary = require('cloudinary').v2;
import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';
import streamifier from 'streamifier';

let storage = multer.memoryStorage();
let upload = multer({
  storage,
});

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //@ts-ignore
  upload.single('image')(req, {}, async (err) => {
    //@ts-ignore
    const reqFile = req.file as REQTYPE;
    streamifier.createReadStream(reqFile.buffer).pipe(
      (res = cloudinary.uploader.upload_stream({
        folder: req.body.folder,
        resource_type: req.body.type || 'auto',
        public_id: req.body.public_id,
      }))
    );
  }),
    function (err: any, result: any) {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    };
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

interface REQTYPE {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

// REQ.FILE returns below
/* {
    fieldname: 'image',
    originalname: 'Capture.PNG',
    encoding: '7bit',
    mimetype: 'image/png',
    buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 04 ca 00 00 02 2f 08 06 00 00 00 85 aa 37 32 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 00 04 ... 48389 more bytes>,
    size: 48439
  } */
