import { products, customers } from '../data/rawData';

export function debounce (func, timeout = 300){
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

export function getMockedTableData (query) {
    if (query.includes('products')) {
      return products;
    }
    else if (query.includes('customers')) {
      return customers;
    }

    return [];
}