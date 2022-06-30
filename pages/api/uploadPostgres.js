import appwriteSDK from '../../helper/utils';
import { PrismaClient } from '@prisma/client';

export default async function uploadPostgres(req, res) {
  const { name, upload } = req.body;
  const prisma = new PrismaClient();

  // const sdk = appwriteSDK().createFile(
  //   '62bcbea61b7f5d1a07f6',
  //   'unique()',
  //   req.files.file
  // );

  prisma.upload
    .create({
      data: {
        name,
        uploadID: upload,
      },
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });

  // sdk
  //   .then((url) => {
  //     const result = prisma.upload.create({
  //       data: {
  //         name,
  //         uploadID: url.$id,
  //       },
  //     });
  //     res.status(200).json(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.json(err);
  //   });
}
