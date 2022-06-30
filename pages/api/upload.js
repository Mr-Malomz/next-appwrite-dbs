import { PrismaClient } from '@prisma/client';

export default function upload(req, res) {
  const { name, upload } = req.body;
  const prisma = new PrismaClient();

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
}
