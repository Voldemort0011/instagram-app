// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"
export default async function handler(req, res) {
  if(req.method == "POST"){
    const instaData = await fs.promises.readdir("instaData");

  await fs.promises.writeFile(`instaData/${instaData.length + 1}.json`, JSON.stringify(req.body))
  }
  res.status(200).json(req.body);
}
