import fs from "fs";
import path from "path";
import { stdout } from "./model.helper";

export const removeFilesFromDir = (dir: string): void => {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(dir, file), (err) => {
        if (err) throw err;
      });
    }
  });
};

export const readFile = (path: string): any => {
  const data = fs.readFileSync(path);
  return JSON.parse(data.toString());
};

export const stdoutItem = async (fileName: string, item: any) =>
  appendFileAsync(`./stdout/${fileName}.txt`, stdout(item));

const appendFileAsync = (path: string, data: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, { flag: "a" }, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};
