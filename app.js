const fs = require('fs');
const {resolve} = require('path');
const express = require("express");
const crypto = require('crypto');
const parser = require('csv-parse');

const PORT = process.env.PORT || 5000;

const app = express();

const csvData = [];

fs.createReadStream(resolve("./NFT Naming csv - All Teams.csv"))
  .pipe(parser.parse({
    delimiter: ',',
    from_line: 1
  }))
  .on('data', function (csvrow,o) {
    console.log(csvrow);
    // const hash = crypto.createHash('sha256').update(JSON.stringify(csvrow)).digest('hex');
    // console.log(hash,"hahs")
    // //do something with csvrow
    // csvData.push(csvrow);
  })
  .on('end', function () {
    //do something with csvData
    // console.log(csvData); 
  });


app.listen(PORT, () => {
  console.log(`🛡️🛡️:::App running on port:${PORT}:::⚡`);
})