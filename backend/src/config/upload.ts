import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const uploadFolder = path.join(__dirname, '..', '..', 'public', 'uploads');

export default {
  directory: uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(16).toString('hex');

      const fileName = `${fileHash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
