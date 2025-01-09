export const navData = {
  shopBy: {
    type: 1,

    link: '/shop-by',

    imgs: [
      '/images/bed1.jpg',
      '/images/Scandinavian1.png',
      '/images/testimonials.png',
    ],

    categories: {
      'Shop by Style': {
        link: '/shop-by-style',

        imgs: ['/images/bed1.jpg', '/images/bed1.jpg'],

        subcategories: {
          Scandinavian: {
            link: '/products/scandinavian',

            imgs: [
              '/images/Scandinavian1.png',
              '/images/Scandinavian2.png',
              '/images/Scandinavian3.png',
            ],

            children: {
              Child1: {
                link: '/child1',

                imgs: ['/images/Chandeliers2.png', '/images/bed1.jpg'],
              },

              Child2: {
                link: '/child2',

                imgs: ['/images/Chandeliers1.png', '/images/bed1.jpg'],
              },
            },
          },

          Minimalistic: {
            link: '/products/minimalistic',

            imgs: [
              '/images/bed1.jpg',
              '/images/Scandinavian2.png',
              '/images/testimonials.png',
            ],

            children: null,
          },
          Metropolitan: {
            link: '/products/Metropolitan',

            imgs: [
              '/images/Scandinavian1.png',
              '/images/Chandeliers2.png',
              '/images/bgAttached.png',
            ],

            children: null,
          },
          'Mid-Century': {
            link: '/products/Mid-Century',

            imgs: [
              '/images/Chandeliers2.png',
              '/images/bgAttached.png',
              '/images/Scandinavian2.png',
            ],

            children: null,
          },
        },
      },
      'Shop by Room': {
        link: '/shop-by-style',

        imgs: ['/images/bed1.jpg', '/images/bed1.jpg'],

        subcategories: {
          'Living Room': {
            link: '/products/living-room',
            imgs: [
              '/images/testimonials.png',
              '/images/Chandeliers2.png',
              '/images/bgAttached.png',
            ],
            children: null,
          },
          'Dining Room': {
            link: '/products/dining-room',
            imgs: [
              '/images/bed1.jpg',
              '/images/Scandinavian1.png',
              '/images/testimonials.png',
            ],
            children: null,
          },
          Bedroom: {
            link: '/products/bedroom',
            imgs: [
              '/images/Chandeliers2.png',
              '/images/bgAttached.png',
              '/images/Scandinavian2.png',
            ],
            children: null,
          },
          Bathroom: {
            link: '/products/bathroom',
            imgs: [
              '/images/Scandinavian1.png',
              '/images/Chandeliers2.png',
              '/images/bgAttached.png',
            ],
            children: null,
          },
          Staircase: {
            link: '/products/staircase',
            imgs: [
              '/images/bed1.jpg',
              '/images/bgAttached.png',
              '/images/testimonials.png',
            ],
            children: null,
          },
          Foyer: {
            link: '/products/foyer',
            imgs: [
              '/images/bed1.jpg',
              '/images/Chandeliers2.png',
              '/images/bgAttached.png',
            ],
            children: null,
          },
          Office: {
            link: '/products/office',
            imgs: [
              '/images/Scandinavian1.png',
              '/images/Chandeliers2.png',
              '/images/bgAttached.png',
            ],
            children: null,
          },
          Patio: {
            link: '/products/patio',
            imgs: [
              '/images/testimonials.png',
              '/images/Chandeliers2.png',
              '/images/bgAttached.png',
            ],

            children: null,
          },
        },
      },
      'Shop by Type': {
        link: '/shop-by-type',

        imgs: ['/images/bed1.jpg', '/images/bed1.jpg'],

        subcategories: {
          'Modern Chandelier': {
            link: '/minimalistic',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },

          'Crystal Chandelier': {
            link: '/minimalistic',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Wall Light': {
            link: '/minimalistic',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Ceiling Light': {
            link: '/minimalistic',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Pendant Light': {
            link: '/minimalistic',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Outdoor Light': {
            link: '/minimalistic',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Hardware & Accessories': {
            link: '/minimalistic',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
        },
      },
      'Shop by Collection': {
        link: '/shop-by-collection',

        imgs: ['/images/testimonials.png', '/images/Chandeliers2.png'],

        subcategories: {
          'Obsidian Collection': {
            link: '/products/obsidian-collection',
            imgs: [
              '/images/bed1.jpg',
              '/images/Scandinavian1.png',
              '/images/testimonials.png',
            ],

            children: null,
          },
          'Celestial Collection': {
            link: '/products/celestial-collection',
            imgs: [
              '/images/bed1.jpg',
              '/images/Scandinavian2.png',
              '/images/testimonials.png',
            ],

            children: null,
          },
          'Aurelius Collection': {
            link: '/products/aurelius-collection',
            imgs: [
              '/images/aurelius1.jpg',
              '/images/aurelius2.jpg',
              '/images/aurelius3.jpg',
            ],
            children: null,
          },
          'Angelica Collection': {
            link: '/products/angelica-collection',
            imgs: [
              '/images/angelica1.jpg',
              '/images/angelica2.jpg',
              '/images/angelica3.jpg',
            ],
            children: null,
          },
          'Emma Collection': {
            link: '/products/emma-collection',
            imgs: [
              '/images/emma1.jpg',
              '/images/emma2.jpg',
              '/images/emma3.jpg',
            ],
            children: null,
          },
          'Raven Collection': {
            link: '/products/raven-collection',
            imgs: [
              '/images/raven1.jpg',
              '/images/raven2.jpg',
              '/images/raven3.jpg',
            ],
            children: null,
          },
          'Umbra Collection': {
            link: '/products/umbra-collection',
            imgs: [
              '/images/umbra1.jpg',
              '/images/umbra2.jpg',
              '/images/umbra3.jpg',
            ],
            children: null,
          },
        },
      },
    },
  },

  IndoorLighting: {
    type: 2,
    categoryText: 'Shop by Room',
    subCategoryText: 'Indoor Lights',

    categories: {
      'Dining Room': {
        link: '/dining-room',

        imgs: ['/images/testimonials.png', '/images/Scandinavian1.png'],
      },

      'Living Room': {
        link: '/living-room',

        imgs: ['/images/living1.jpg', '/images/living2.jpg'],
      },

      'Bed Room': {
        link: '/bedroom',

        imgs: ['/images/bedroom1.jpg', '/images/bedroom2.jpg'],
      },
    },

    subcategories: {
      'Modern Chandeliers': {
        link: '/modern-chandeliers',

        imgs: ['/images/chandelier1.jpg', '/images/chandelier2.jpg'],
      },

      'Crystal Chandeliers': {
        link: '/crystal-chandeliers',

        imgs: ['/images/chandelier3.jpg', '/images/chandelier4.jpg'],
      },

      'Ceiling Lights': {
        link: '/ceiling-lights',

        imgs: ['/images/ceiling1.jpg', '/images/ceiling2.jpg'],
      },
    },
  },
  OutdoorLighting: {
    type: 2,
    categoryText: 'Shop by Room',
    subCategoryText: 'Outdoor Lights',

    categories: {
      'Dining Room': {
        link: '/products/dining-room',

        imgs: ['/images/testimonials.png', '/images/Scandinavian1.png'],
      },

      'Living Room': {
        link: '/products/living-room',

        imgs: ['/images/living1.jpg', '/images/living2.jpg'],
      },

      'Bed Room': {
        link: '/products/bedroom',

        imgs: ['/images/bedroom1.jpg', '/images/bedroom2.jpg'],
      },
    },

    subcategories: {
      'Modern Chandeliers': {
        link: '/modern-chandeliers',

        imgs: ['/images/chandelier1.jpg', '/images/chandelier2.jpg'],
      },

      'Crystal Chandeliers': {
        link: '/crystal-chandeliers',

        imgs: ['/images/chandelier3.jpg', '/images/chandelier4.jpg'],
      },

      'Ceiling Lights': {
        link: '/ceiling-lights',

        imgs: ['/images/ceiling1.jpg', '/images/ceiling2.jpg'],
      },
    },
  },

  otherLinks: [
    { name: 'Electrical Supplies', link: '/electrical-supplies' },
    { name: 'Fashion lights', link: '/fashion-lights' },
    { name: 'Best Seller', link: '/best-seller' },
    { name: 'New Arrivals', link: '/new-arrivals' },
    { name: 'About', link: '/about-us' },

    { name: 'Contact', link: '/contact' },

    { name: 'Blog', link: '/blog' },
  ],
};

export const products = {
  1: {
    name: 'Modern Ceiling Light',
    description: 'A sleek and modern ceiling light for living rooms.',
    images: [
      '/images/bed1.jpg',
      '/images/Chandeliers2.png',
      '/images/bgAttached.png',
    ],
    tag: 'Sale',
    addDate: '12/16/2024',
  },
  2: {
    name: 'Vintage Table Lamp',
    description: 'A classic table lamp with a vintage touch.',
    images: [
      '/images/Chandeliers2.png',
      '/images/bgAttached.png',
      '/images/Scandinavian2.png',
    ],
    tag: 'Sale',
    addDate: '12/15/2024',
  },
  3: {
    name: 'Chandelier',
    description: 'Elegant chandelier for dining areas.',
    images: [
      '/images/Chandeliers1.png',
      '/images/Chandeliers2.png',
      '/images/Chandeliers3.png',
    ],
    tag: 'New Arrivals',
    addDate: '12/14/2024',
  },
  4: {
    name: 'Wall Sconce',
    description: 'Minimalistic wall sconce for bedrooms.',
    images: [
      '/images/testimonials.png',
      '/images/Chandeliers2.png',
      '/images/bgAttached.png',
    ],
    tag: 'New Arrivals',
    addDate: '12/16/2024',
  },
};

export const categoriesData = {
  style: [1, 2],
  type: [1, 3],
  room: [2, 4],
  scandinavian: [1, 2, 2, 2, 2, 2, 2, 2, 2, 4],
  bedroom: [1],
};
