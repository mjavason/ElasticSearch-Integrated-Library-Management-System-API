import fs from 'fs';

export async function createJSONFile(path: string, fileName: string, dataObject: {}) {
  // Write to a file asynchronously
  fs.writeFile(`${path}${fileName}.json`, JSON.stringify(dataObject), (err) => {
    if (err) {
      console.log('Unable to create file', err.message);
      return;
    }
    console.log('JSON string has been written to the file.');
    return true;
  });
}
