export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'productName',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Product Category',
      },
      {
        name: 'inventory',
        type: 'number',
        title: 'Inventory',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Status',
      },
      {
        name: 'colors',
        type: 'array',
        title: 'Product Colors',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Add colors like Red, Blue, Green, etc.',
      },      
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true // Enables cropping and focal point selection
        }
      }
    ]
  };