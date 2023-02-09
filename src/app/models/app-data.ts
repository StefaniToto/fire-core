import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductDataFromAPI } from './product-data-fromAPI';

export class AppData implements InMemoryDbService {
  createDb(): { productsFromAPI: ProductDataFromAPI } {
    const productsFromAPI = ProductDataFromAPI.productsFromAPI;
    return { productsFromAPI };
  }
}
