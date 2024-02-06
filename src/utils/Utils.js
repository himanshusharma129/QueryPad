import { products, customers } from '../data/rawData';

export function debounce (func, timeout = 300){
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

/**
 * A mock function to return table data stored locally, this tries to mimic sql run results
 * @param {string} query 
 * @returns table data of type ITable
 */
export function getMockedTableData (query) {
    if (query.includes('products')) {
      return products;
    }
    else if (query.includes('customers')) {
      return customers;
    }

    return [];
}

/**
 * A mock function that returns an array of data connectors
 * @returns {Array} - Array of data connectors
 
 */
export function getConnectors () {

  return [{
    name: 'MockData Github',
    value: 'git1',
  }];
}