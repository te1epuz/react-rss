import { TResponse } from './types';

export async function getAllProducts() {
  const data = await fetch('https://dummyjson.com/products?limit=20');
  const result: TResponse = await data.json();
  return result;
}
