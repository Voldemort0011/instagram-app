import * as fs from "fs";
export default async function handler(req, res){
    const filesInDir = await fs.promises.readdir("instaData") 
    let data;
    let arrOfData = [];
    for (let i = 0; i < filesInDir.length; i++) {
        const element = filesInDir[i];
         data = await fs.promises.readFile(`instaData/${element}`, "utf-8");

         data = JSON.parse(data)

         arrOfData.push(data)

      

    }

    res.status(200).json(arrOfData)


}