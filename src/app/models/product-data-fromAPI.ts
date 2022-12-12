// Demonstrates how to map from one shape obtained from an external API
// to an entirely different shape.
export class ProductDataFromAPI {
  static productsFromAPI: ProductFromAPI[] = [
    {
      p_id: 1,
      p_nam: 'Leaf Rake',
      key: 'GDN-0011',
      p_des: 'Leaf rake with 48-inch wooden handle',
      p_s: '1',
      p_p: 19.95,
      allowDownload: true,
      selectKey: [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
      ],
    },
    {
      p_id: 2,
      p_nam: 'Garden Cart',
      key: 'GDN-0023',
      p_des: '15 gallon capacity rolling garden cart',
      p_s: '2',
      p_p: 32.99,
      allowDownload: false,
      selectKey: [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
      ],
    },
    {
      p_id: 3,
      p_nam: 'Garden Co',
      key: 'GDN-0024',
      p_des: '15 gallon capacity rolling garden cart',
      p_s: '3',
      p_p: 32.99,
      allowDownload: false,
      selectKey: [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
      ],
    },
    {
      p_id: 4,
      p_nam: 'Gi Cart',
      key: 'GDN-003',
      p_des: '15 gallon capacity rolling garden cart',
      p_s: '4',
      p_p: 32.99,
      allowDownload: false,
      selectKey: [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
      ],
    },
    {
      p_id: 5,
      p_nam: 'Hammer',
      key: 'TBX-0048',
      p_des: 'Curved claw steel hammer',
      p_s: '5',
      p_p: 8.9,
      allowDownload: false,
      selectKey: [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
      ],
    },
    {
      p_id: 8,
      p_nam: 'Saw',
      key: 'TBX-0022',
      p_des: '15-inch steel blade hand saw',
      p_s: '6',
      p_p: 11.55,
      allowDownload: false,
      selectKey: [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
      ],
    },
    {
      p_id: 10,
      p_nam: 'Video Game Controller',
      key: 'GMG-0042',
      p_des: 'Standard two-button video game controller',
      p_s: '7',
      p_p: 35.95,
      allowDownload: true,
      selectKey: [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
      ],
    },
  ];
}

/* Defines the product data as retrieved from the backend server API */
export interface ProductFromAPI {
  p_id: number;
  p_nam: string;
  key: string;
  p_des: string;
  p_s: string;
  p_p: number;
  allowDownload: boolean;
  selectKey: any[];
}
