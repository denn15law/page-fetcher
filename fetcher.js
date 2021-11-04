const args = process.argv.slice(2);

const URL = args[0];
const path = args[1];
const fs = require("fs");

let bodyOfURL;

const request = require("request");
request(URL, (error, response, body) => {
  bodyOfURL = body;
  fs.writeFile(path, bodyOfURL, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    console.log(`Downloaded and saved ${bodyOfURL.length} bytes to ${path}`);
  });
});
