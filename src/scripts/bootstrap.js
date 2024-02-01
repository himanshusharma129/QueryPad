const fs = require('fs');
const axios = require('axios');
const csv = require('csv-parser');

const dataUrl = 'https://github.com/graphql-compose/graphql-compose-examples/raw/master/examples/northwind/data/csv/';

async function downloadCSV(url, fileName) {
  const response = await axios.get(url);
  fs.writeFileSync(fileName, response.data);
}

async function extractTableInfo(csvFileName) {
    const table = [];
  
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(csvFileName)
        .pipe(csv())
        .on('data', (row) => {
            table.push(row)
          
        })
        .on('end', () => {
          resolve(table);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

async function runBootstrap() {

    // use the below to get data from all the files
    //   const csvFiles = ['categories.csv', 'customers.csv', 'employee_territories.csv', 'employees.csv', 'products.csv'
//     , 'order_details.csv', 'orders.csv', 'regions.csv', 'shippers.csv', 'suppliers.csv', 'territories.csv']

    const csvFiles = ['products.csv'];

  for (const csvFile of csvFiles) {
    const csvUrl = `${dataUrl}${csvFile}`;
    const localFileName = `./src/data/${csvFile}`;

    console.log(`Downloading ${csvFile}...`);
    await downloadCSV(csvUrl, localFileName);

    console.log(`Extracting table info from ${csvFile}...`);
    const tableInfo = await extractTableInfo(localFileName);
    const jsonData = JSON.stringify(tableInfo, null, 2);

    // Write the JSON string to a file
    fs.writeFileSync('./src/data/rawData.json', jsonData);

    console.log('Data has been written to output.json');
  }
}

console.info('Bootstrapping data...');

runBootstrap();
