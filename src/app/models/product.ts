/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  productCode?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  category?: string;
  quantityInStock?: number;
  searchKey?: string[];
  supplierIds?: number[];
}

//
// Extras not included in the course
//

// Provided to demonstrate merging parent and
// child data into individual rows
export interface ProductWithSupplier {
  id: number;
  productName: string;
  productCode?: string;
  description?: string;
  categoryId?: number;
  category?: string;
  supplier?: string;
}
