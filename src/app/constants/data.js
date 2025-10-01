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
            link: '/products/chandelier',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },

          'Crystal Chandelier': {
            link: '/products/chandelier',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Wall Light': {
            link: '/products/wallLights',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Ceiling Light': {
            link: '/products/ceilingLight',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Pendant Light': {
            link: '/products/islandLights',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Outdoor Light': {
            link: '/products/outdoorWallLight',

            imgs: ['/images/bed1.jpg', '/images/bed1.jpg', '/images/bed1.jpg'],

            children: null,
          },
          'Vanity Light': {
            link: '/products/vanityLight',

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
        link: '/chandelier',

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
    name: 'LPD3191-4',
    description: 'Product 1 - LPD3191-4',
    images: [
      '/images/lights/ceiling-light/LPD3191-4.JPG',
      '/images/lights/ceiling-light/LPD3191-4.JPG',
      '/images/lights/ceiling-light/LPD3191-4.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  2: {
    name: 'LPD8599R- 300',
    description: 'Product 2 - LPD8599R- 300',
    images: [
      '/images/lights/ceiling-light/LPD8599R- 300.jpg',
      '/images/lights/ceiling-light/LPD8599R- 300.jpg',
      '/images/lights/ceiling-light/LPD8599R- 300.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  3: {
    name: 'LPD14401-3 BK',
    description: 'Product 3 - LPD14401-3 BK',
    images: [
      '/images/lights/ceiling-light/LPD14401-3 BK.jpg',
      '/images/lights/ceiling-light/LPD14401-3 BK.jpg',
      '/images/lights/ceiling-light/LPD14401-3 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  4: {
    name: 'LPD17500R-1 BK 2',
    description: 'Product 4 - LPD17500R-1 BK 2',
    images: [
      '/images/lights/ceiling-light/LPD17500R-1 BK 2.jpg',
      '/images/lights/ceiling-light/LPD17500R-1 BK 2.jpg',
      '/images/lights/ceiling-light/LPD17500R-1 BK 2.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  5: {
    name: 'LX83007-360X36 0',
    description: 'Product 5 - LX83007-360X36 0',
    images: [
      '/images/lights/ceiling-light/LX83007-360X36 0.JPG',
      '/images/lights/ceiling-light/LX83007-360X36 0.JPG',
      '/images/lights/ceiling-light/LX83007-360X36 0.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  6: {
    name: 'W14145 2',
    description: 'Product 6 - W14145 2',
    images: [
      '/images/lights/ceiling-light/W14145 2.jpg',
      '/images/lights/ceiling-light/W14145 2.jpg',
      '/images/lights/ceiling-light/W14145 2.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  7: {
    name: 'W14145',
    description: 'Product 7 - W14145',
    images: [
      '/images/lights/ceiling-light/W14145.jpg',
      '/images/lights/ceiling-light/W14145.jpg',
      '/images/lights/ceiling-light/W14145.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  8: {
    name: 'LD16505-10',
    description: 'Product 8 - LD16505-10',
    images: [
      '/images/lights/island-lights/LD16505-10.jpg',
      '/images/lights/island-lights/LD16505-10.jpg',
      '/images/lights/island-lights/LD16505-10.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  9: {
    name: 'LDD10211-7 GD',
    description: 'Product 9 - LDD10211-7 GD',
    images: [
      '/images/lights/island-lights/LDD10211-7 GD.JPG',
      '/images/lights/island-lights/LDD10211-7 GD.JPG',
      '/images/lights/island-lights/LDD10211-7 GD.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  10: {
    name: 'LPC1205',
    description: 'Product 10 - LPC1205',
    images: [
      '/images/lights/island-lights/LPC1205.jpg',
      '/images/lights/island-lights/LPC1205.jpg',
      '/images/lights/island-lights/LPC1205.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  11: {
    name: 'LPC3071-860X300 GD on',
    description: 'Product 11 - LPC3071-860X300 GD on',
    images: [
      '/images/lights/island-lights/LPC3071-860X300 GD on.JPG',
      '/images/lights/island-lights/LPC3071-860X300 GD on.JPG',
      '/images/lights/island-lights/LPC3071-860X300 GD on.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  12: {
    name: 'LPC3071-860X300 PBK OFF',
    description: 'Product 12 - LPC3071-860X300 PBK OFF',
    images: [
      '/images/lights/island-lights/LPC3071-860X300 PBK OFF.jpg',
      '/images/lights/island-lights/LPC3071-860X300 PBK OFF.jpg',
      '/images/lights/island-lights/LPC3071-860X300 PBK OFF.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  13: {
    name: 'LPC8150-1',
    description: 'Product 13 - LPC8150-1',
    images: [
      '/images/lights/island-lights/LPC8150-1.jpg',
      '/images/lights/island-lights/LPC8150-1.jpg',
      '/images/lights/island-lights/LPC8150-1.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  14: {
    name: 'LPC8150-23',
    description: 'Product 14 - LPC8150-23',
    images: [
      '/images/lights/island-lights/LPC8150-23.jpg',
      '/images/lights/island-lights/LPC8150-23.jpg',
      '/images/lights/island-lights/LPC8150-23.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  15: {
    name: 'LPC8150-7',
    description: 'Product 15 - LPC8150-7',
    images: [
      '/images/lights/island-lights/LPC8150-7.jpg',
      '/images/lights/island-lights/LPC8150-7.jpg',
      '/images/lights/island-lights/LPC8150-7.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  16: {
    name: '13',
    description: 'Product 16 - 13',
    images: [
      '/images/lights/outdoor-wall-light/13.jpg',
      '/images/lights/outdoor-wall-light/13.jpg',
      '/images/lights/outdoor-wall-light/13.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  17: {
    name: '23',
    description: 'Product 17 - 23',
    images: [
      '/images/lights/outdoor-wall-light/23.jpg',
      '/images/lights/outdoor-wall-light/23.jpg',
      '/images/lights/outdoor-wall-light/23.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  18: {
    name: '33',
    description: 'Product 18 - 33',
    images: [
      '/images/lights/outdoor-wall-light/33.jpg',
      '/images/lights/outdoor-wall-light/33.jpg',
      '/images/lights/outdoor-wall-light/33.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  19: {
    name: '43',
    description: 'Product 19 - 43',
    images: [
      '/images/lights/outdoor-wall-light/43.jpg',
      '/images/lights/outdoor-wall-light/43.jpg',
      '/images/lights/outdoor-wall-light/43.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  20: {
    name: '5W圆形03_05_03',
    description: 'Product 20 - 5W圆形03_05_03',
    images: [
      '/images/lights/outdoor-wall-light/5W圆形03_05_03.png',
      '/images/lights/outdoor-wall-light/5W圆形03_05_03.png',
      '/images/lights/outdoor-wall-light/5W圆形03_05_03.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  21: {
    name: '5W圆形03_05_04',
    description: 'Product 21 - 5W圆形03_05_04',
    images: [
      '/images/lights/outdoor-wall-light/5W圆形03_05_04.png',
      '/images/lights/outdoor-wall-light/5W圆形03_05_04.png',
      '/images/lights/outdoor-wall-light/5W圆形03_05_04.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  22: {
    name: '5W圆形03_05_07',
    description: 'Product 22 - 5W圆形03_05_07',
    images: [
      '/images/lights/outdoor-wall-light/5W圆形03_05_07.png',
      '/images/lights/outdoor-wall-light/5W圆形03_05_07.png',
      '/images/lights/outdoor-wall-light/5W圆形03_05_07.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  23: {
    name: 'ACW12332-3',
    description: 'Product 23 - ACW12332-3',
    images: [
      '/images/lights/vanity-light/ACW12332-3.JPG',
      '/images/lights/vanity-light/ACW12332-3.JPG',
      '/images/lights/vanity-light/ACW12332-3.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  24: {
    name: 'ACW12332-5',
    description: 'Product 24 - ACW12332-5',
    images: [
      '/images/lights/vanity-light/ACW12332-5.JPG',
      '/images/lights/vanity-light/ACW12332-5.JPG',
      '/images/lights/vanity-light/ACW12332-5.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  25: {
    name: 'LCW17512-3',
    description: 'Product 25 - LCW17512-3',
    images: [
      '/images/lights/vanity-light/LCW17512-3.jpg',
      '/images/lights/vanity-light/LCW17512-3.jpg',
      '/images/lights/vanity-light/LCW17512-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  26: {
    name: 'LCW17512-4',
    description: 'Product 26 - LCW17512-4',
    images: [
      '/images/lights/vanity-light/LCW17512-4.jpg',
      '/images/lights/vanity-light/LCW17512-4.jpg',
      '/images/lights/vanity-light/LCW17512-4.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  27: {
    name: 'LCW17512-5',
    description: 'Product 27 - LCW17512-5',
    images: [
      '/images/lights/vanity-light/LCW17512-5.jpg',
      '/images/lights/vanity-light/LCW17512-5.jpg',
      '/images/lights/vanity-light/LCW17512-5.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  28: {
    name: 'LCW17513-3',
    description: 'Product 28 - LCW17513-3',
    images: [
      '/images/lights/vanity-light/LCW17513-3.jpg',
      '/images/lights/vanity-light/LCW17513-3.jpg',
      '/images/lights/vanity-light/LCW17513-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  29: {
    name: 'LCW17513-4',
    description: 'Product 29 - LCW17513-4',
    images: [
      '/images/lights/vanity-light/LCW17513-4.jpg',
      '/images/lights/vanity-light/LCW17513-4.jpg',
      '/images/lights/vanity-light/LCW17513-4.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  30: {
    name: 'LCW17513-5',
    description: 'Product 30 - LCW17513-5',
    images: [
      '/images/lights/vanity-light/LCW17513-5.jpg',
      '/images/lights/vanity-light/LCW17513-5.jpg',
      '/images/lights/vanity-light/LCW17513-5.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  31: {
    name: 'LCW17515-3-',
    description: 'Product 31 - LCW17515-3-',
    images: [
      '/images/lights/vanity-light/LCW17515-3-.jpg',
      '/images/lights/vanity-light/LCW17515-3-.jpg',
      '/images/lights/vanity-light/LCW17515-3-.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  32: {
    name: 'LCW17515-4',
    description: 'Product 32 - LCW17515-4',
    images: [
      '/images/lights/vanity-light/LCW17515-4.jpg',
      '/images/lights/vanity-light/LCW17515-4.jpg',
      '/images/lights/vanity-light/LCW17515-4.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  33: {
    name: 'LD1195-600',
    description: 'Product 33 - LD1195-600',
    images: [
      '/images/lights/vanity-light/LD1195-600.JPG',
      '/images/lights/vanity-light/LD1195-600.JPG',
      '/images/lights/vanity-light/LD1195-600.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  34: {
    name: 'LD8855-3',
    description: 'Product 34 - LD8855-3',
    images: [
      '/images/lights/vanity-light/LD8855-3.JPG',
      '/images/lights/vanity-light/LD8855-3.JPG',
      '/images/lights/vanity-light/LD8855-3.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  35: {
    name: 'LD8855-4',
    description: 'Product 35 - LD8855-4',
    images: [
      '/images/lights/vanity-light/LD8855-4.JPG',
      '/images/lights/vanity-light/LD8855-4.JPG',
      '/images/lights/vanity-light/LD8855-4.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  36: {
    name: 'LPW10419-3',
    description: 'Product 36 - LPW10419-3',
    images: [
      '/images/lights/vanity-light/LPW10419-3.jpg',
      '/images/lights/vanity-light/LPW10419-3.jpg',
      '/images/lights/vanity-light/LPW10419-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  37: {
    name: 'LPW10419-4',
    description: 'Product 37 - LPW10419-4',
    images: [
      '/images/lights/vanity-light/LPW10419-4.jpg',
      '/images/lights/vanity-light/LPW10419-4.jpg',
      '/images/lights/vanity-light/LPW10419-4.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  38: {
    name: 'LPW10419-5',
    description: 'Product 38 - LPW10419-5',
    images: [
      '/images/lights/vanity-light/LPW10419-5.jpg',
      '/images/lights/vanity-light/LPW10419-5.jpg',
      '/images/lights/vanity-light/LPW10419-5.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  39: {
    name: 'LPW15015-3',
    description: 'Product 39 - LPW15015-3',
    images: [
      '/images/lights/vanity-light/LPW15015-3.jpg',
      '/images/lights/vanity-light/LPW15015-3.jpg',
      '/images/lights/vanity-light/LPW15015-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  40: {
    name: 'LPW15019-3 BK',
    description: 'Product 40 - LPW15019-3 BK',
    images: [
      '/images/lights/vanity-light/LPW15019-3 BK.jpg',
      '/images/lights/vanity-light/LPW15019-3 BK.jpg',
      '/images/lights/vanity-light/LPW15019-3 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  41: {
    name: 'LPW15019-4 BK',
    description: 'Product 41 - LPW15019-4 BK',
    images: [
      '/images/lights/vanity-light/LPW15019-4 BK.JPG',
      '/images/lights/vanity-light/LPW15019-4 BK.JPG',
      '/images/lights/vanity-light/LPW15019-4 BK.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  42: {
    name: 'LPW15019-4 CH',
    description: 'Product 42 - LPW15019-4 CH',
    images: [
      '/images/lights/vanity-light/LPW15019-4 CH.JPG',
      '/images/lights/vanity-light/LPW15019-4 CH.JPG',
      '/images/lights/vanity-light/LPW15019-4 CH.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  43: {
    name: 'LPW15019-4-',
    description: 'Product 43 - LPW15019-4-',
    images: [
      '/images/lights/vanity-light/LPW15019-4-.jpg',
      '/images/lights/vanity-light/LPW15019-4-.jpg',
      '/images/lights/vanity-light/LPW15019-4-.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  44: {
    name: 'LPW15020-4 CH+BK',
    description: 'Product 44 - LPW15020-4 CH+BK',
    images: [
      '/images/lights/vanity-light/LPW15020-4 CH+BK.JPG',
      '/images/lights/vanity-light/LPW15020-4 CH+BK.JPG',
      '/images/lights/vanity-light/LPW15020-4 CH+BK.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  45: {
    name: 'LPW15021-4',
    description: 'Product 45 - LPW15021-4',
    images: [
      '/images/lights/vanity-light/LPW15021-4.jpg',
      '/images/lights/vanity-light/LPW15021-4.jpg',
      '/images/lights/vanity-light/LPW15021-4.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  46: {
    name: 'W14145 2',
    description: 'Product 46 - W14145 2',
    images: [
      '/images/lights/vanity-light/W14145 2.psd',
      '/images/lights/vanity-light/W14145 2.psd',
      '/images/lights/vanity-light/W14145 2.psd',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  47: {
    name: 'W14145',
    description: 'Product 47 - W14145',
    images: [
      '/images/lights/vanity-light/W14145.psd',
      '/images/lights/vanity-light/W14145.psd',
      '/images/lights/vanity-light/W14145.psd',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  48: {
    name: 'WB1222-3',
    description: 'Product 48 - WB1222-3',
    images: [
      '/images/lights/vanity-light/WB1222-3.jpg',
      '/images/lights/vanity-light/WB1222-3.jpg',
      '/images/lights/vanity-light/WB1222-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  49: {
    name: 'WB1222-4',
    description: 'Product 49 - WB1222-4',
    images: [
      '/images/lights/vanity-light/WB1222-4.jpg',
      '/images/lights/vanity-light/WB1222-4.jpg',
      '/images/lights/vanity-light/WB1222-4.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  50: {
    name: 'WB1222-5',
    description: 'Product 50 - WB1222-5',
    images: [
      '/images/lights/vanity-light/WB1222-5.jpg',
      '/images/lights/vanity-light/WB1222-5.jpg',
      '/images/lights/vanity-light/WB1222-5.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  51: {
    name: 'WB8802S-3',
    description: 'Product 51 - WB8802S-3',
    images: [
      '/images/lights/vanity-light/WB8802S-3.JPG',
      '/images/lights/vanity-light/WB8802S-3.JPG',
      '/images/lights/vanity-light/WB8802S-3.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  52: {
    name: 'WB8802S-5',
    description: 'Product 52 - WB8802S-5',
    images: [
      '/images/lights/vanity-light/WB8802S-5.JPG',
      '/images/lights/vanity-light/WB8802S-5.JPG',
      '/images/lights/vanity-light/WB8802S-5.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  53: {
    name: 'WB8802S-6',
    description: 'Product 53 - WB8802S-6',
    images: [
      '/images/lights/vanity-light/WB8802S-6.JPG',
      '/images/lights/vanity-light/WB8802S-6.JPG',
      '/images/lights/vanity-light/WB8802S-6.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  54: {
    name: '03',
    description: 'Product 54 - 03',
    images: [
      '/images/lights/wall-lights/03.jpg',
      '/images/lights/wall-lights/03.jpg',
      '/images/lights/wall-lights/03.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  55: {
    name: '04',
    description: 'Product 55 - 04',
    images: [
      '/images/lights/wall-lights/04.jpg',
      '/images/lights/wall-lights/04.jpg',
      '/images/lights/wall-lights/04.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  56: {
    name: '14 Inch Up Down LED Wall Light 01',
    description: 'Product 56 - 14 Inch Up Down LED Wall Light 01',
    images: [
      '/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg',
      '/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg',
      '/images/lights/wall-lights/14 Inch Up Down LED Wall Light 01.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  57: {
    name: '14 Inch Up Down LED Wall Light 04',
    description: 'Product 57 - 14 Inch Up Down LED Wall Light 04',
    images: [
      '/images/lights/wall-lights/14 Inch Up Down LED Wall Light 04.jpg',
      '/images/lights/wall-lights/14 Inch Up Down LED Wall Light 04.jpg',
      '/images/lights/wall-lights/14 Inch Up Down LED Wall Light 04.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  58: {
    name: "14''",
    description: "Product 58 - 14''",
    images: [
      "/images/lights/wall-lights/14''.png",
      "/images/lights/wall-lights/14''.png",
      "/images/lights/wall-lights/14''.png",
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  59: {
    name: '8-inch-12w-led-wall-light-2',
    description: 'Product 59 - 8-inch-12w-led-wall-light-2',
    images: [
      '/images/lights/wall-lights/8-inch-12w-led-wall-light-2.jpg',
      '/images/lights/wall-lights/8-inch-12w-led-wall-light-2.jpg',
      '/images/lights/wall-lights/8-inch-12w-led-wall-light-2.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  60: {
    name: '8-inch-12w-led-wall-light-3',
    description: 'Product 60 - 8-inch-12w-led-wall-light-3',
    images: [
      '/images/lights/wall-lights/8-inch-12w-led-wall-light-3.jpg',
      '/images/lights/wall-lights/8-inch-12w-led-wall-light-3.jpg',
      '/images/lights/wall-lights/8-inch-12w-led-wall-light-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  61: {
    name: '8-inch-12w-led-wall-light',
    description: 'Product 61 - 8-inch-12w-led-wall-light',
    images: [
      '/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg',
      '/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg',
      '/images/lights/wall-lights/8-inch-12w-led-wall-light.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  62: {
    name: '8寸 三角壁灯',
    description: 'Product 62 - 8寸 三角壁灯',
    images: [
      '/images/lights/wall-lights/8寸 三角壁灯.png',
      '/images/lights/wall-lights/8寸 三角壁灯.png',
      '/images/lights/wall-lights/8寸 三角壁灯.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  63: {
    name: 'LPW10249 CP',
    description: 'Product 63 - LPW10249 CP',
    images: [
      '/images/lights/wall-lights/LPW10249 CP.png',
      '/images/lights/wall-lights/LPW10249 CP.png',
      '/images/lights/wall-lights/LPW10249 CP.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  64: {
    name: 'LPW14322',
    description: 'Product 64 - LPW14322',
    images: [
      '/images/lights/wall-lights/LPW14322.jpg',
      '/images/lights/wall-lights/LPW14322.jpg',
      '/images/lights/wall-lights/LPW14322.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  65: {
    name: 'LPW14401-1 BK copy',
    description: 'Product 65 - LPW14401-1 BK copy',
    images: [
      '/images/lights/wall-lights/LPW14401-1 BK copy.jpeg',
      '/images/lights/wall-lights/LPW14401-1 BK copy.jpeg',
      '/images/lights/wall-lights/LPW14401-1 BK copy.jpeg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  66: {
    name: 'LPW15014-3',
    description: 'Product 66 - LPW15014-3',
    images: [
      '/images/lights/wall-lights/LPW15014-3.jpg',
      '/images/lights/wall-lights/LPW15014-3.jpg',
      '/images/lights/wall-lights/LPW15014-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  67: {
    name: 'LPW3007 GD',
    description: 'Product 67 - LPW3007 GD',
    images: [
      '/images/lights/wall-lights/LPW3007 GD.jpg',
      '/images/lights/wall-lights/LPW3007 GD.jpg',
      '/images/lights/wall-lights/LPW3007 GD.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  68: {
    name: 'LPW9385',
    description: 'Product 68 - LPW9385',
    images: [
      '/images/lights/wall-lights/LPW9385.jpg',
      '/images/lights/wall-lights/LPW9385.jpg',
      '/images/lights/wall-lights/LPW9385.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  69: {
    name: '14088-600',
    description: 'Product 69 - 14088-600',
    images: [
      '/images/lights/chandelier/14088-600.JPG',
      '/images/lights/chandelier/14088-600.JPG',
      '/images/lights/chandelier/14088-600.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  70: {
    name: '14088-800+500',
    description: 'Product 70 - 14088-800+500',
    images: [
      '/images/lights/chandelier/14088-800+500.JPG',
      '/images/lights/chandelier/14088-800+500.JPG',
      '/images/lights/chandelier/14088-800+500.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  71: {
    name: 'AC8599R-3-1',
    description: 'Product 71 - AC8599R-3-1',
    images: [
      '/images/lights/chandelier/AC8599R-3-1.jpg',
      '/images/lights/chandelier/AC8599R-3-1.jpg',
      '/images/lights/chandelier/AC8599R-3-1.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  72: {
    name: 'AC8599R-4--',
    description: 'Product 72 - AC8599R-4--',
    images: [
      '/images/lights/chandelier/AC8599R-4--.jpg',
      '/images/lights/chandelier/AC8599R-4--.jpg',
      '/images/lights/chandelier/AC8599R-4--.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  73: {
    name: 'AC8599S-3',
    description: 'Product 73 - AC8599S-3',
    images: [
      '/images/lights/chandelier/AC8599S-3.jpg',
      '/images/lights/chandelier/AC8599S-3.jpg',
      '/images/lights/chandelier/AC8599S-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  74: {
    name: 'AC8599S-6 GD',
    description: 'Product 74 - AC8599S-6 GD',
    images: [
      '/images/lights/chandelier/AC8599S-6 GD.jpg',
      '/images/lights/chandelier/AC8599S-6 GD.jpg',
      '/images/lights/chandelier/AC8599S-6 GD.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  75: {
    name: 'AC8802-1 D600 BK',
    description: 'Product 75 - AC8802-1 D600 BK',
    images: [
      '/images/lights/chandelier/AC8802-1 D600 BK.jpg',
      '/images/lights/chandelier/AC8802-1 D600 BK.jpg',
      '/images/lights/chandelier/AC8802-1 D600 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  76: {
    name: 'AC8802-2 BK',
    description: 'Product 76 - AC8802-2 BK',
    images: [
      '/images/lights/chandelier/AC8802-2 BK.JPG',
      '/images/lights/chandelier/AC8802-2 BK.JPG',
      '/images/lights/chandelier/AC8802-2 BK.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  77: {
    name: 'AC8802-5',
    description: 'Product 77 - AC8802-5',
    images: [
      '/images/lights/chandelier/AC8802-5.jpg',
      '/images/lights/chandelier/AC8802-5.jpg',
      '/images/lights/chandelier/AC8802-5.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  78: {
    name: 'AC8802-600+400+200',
    description: 'Product 78 - AC8802-600+400+200',
    images: [
      '/images/lights/chandelier/AC8802-600+400+200.JPG',
      '/images/lights/chandelier/AC8802-600+400+200.JPG',
      '/images/lights/chandelier/AC8802-600+400+200.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  79: {
    name: 'BC84004-3 D450 H500',
    description: 'Product 79 - BC84004-3 D450 H500',
    images: [
      '/images/lights/chandelier/BC84004-3 D450 H500.jpg',
      '/images/lights/chandelier/BC84004-3 D450 H500.jpg',
      '/images/lights/chandelier/BC84004-3 D450 H500.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  80: {
    name: 'BC84004-6 GD D860 H500 MaxH1200',
    description: 'Product 80 - BC84004-6 GD D860 H500 MaxH1200',
    images: [
      '/images/lights/chandelier/BC84004-6 GD D860 H500 MaxH1200.jpg',
      '/images/lights/chandelier/BC84004-6 GD D860 H500 MaxH1200.jpg',
      '/images/lights/chandelier/BC84004-6 GD D860 H500 MaxH1200.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  81: {
    name: 'BC84004-8+4 D860 H500 MaxH1200',
    description: 'Product 81 - BC84004-8+4 D860 H500 MaxH1200',
    images: [
      '/images/lights/chandelier/BC84004-8+4 D860 H500 MaxH1200.jpg',
      '/images/lights/chandelier/BC84004-8+4 D860 H500 MaxH1200.jpg',
      '/images/lights/chandelier/BC84004-8+4 D860 H500 MaxH1200.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  82: {
    name: 'BC84006-4 BK 720X180X180',
    description: 'Product 82 - BC84006-4 BK 720X180X180',
    images: [
      '/images/lights/chandelier/BC84006-4 BK 720X180X180.jpg',
      '/images/lights/chandelier/BC84006-4 BK 720X180X180.jpg',
      '/images/lights/chandelier/BC84006-4 BK 720X180X180.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  83: {
    name: 'BC84006-5 BK 920X180X180',
    description: 'Product 83 - BC84006-5 BK 920X180X180',
    images: [
      '/images/lights/chandelier/BC84006-5 BK 920X180X180.jpg',
      '/images/lights/chandelier/BC84006-5 BK 920X180X180.jpg',
      '/images/lights/chandelier/BC84006-5 BK 920X180X180.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  84: {
    name: 'BC84011-8+4',
    description: 'Product 84 - BC84011-8+4',
    images: [
      '/images/lights/chandelier/BC84011-8+4.jpg',
      '/images/lights/chandelier/BC84011-8+4.jpg',
      '/images/lights/chandelier/BC84011-8+4.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  85: {
    name: 'BC84023-1 BK',
    description: 'Product 85 - BC84023-1 BK',
    images: [
      '/images/lights/chandelier/BC84023-1 BK.jpg',
      '/images/lights/chandelier/BC84023-1 BK.jpg',
      '/images/lights/chandelier/BC84023-1 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  86: {
    name: 'BC84023-3L BK 2',
    description: 'Product 86 - BC84023-3L BK 2',
    images: [
      '/images/lights/chandelier/BC84023-3L BK 2.jpg',
      '/images/lights/chandelier/BC84023-3L BK 2.jpg',
      '/images/lights/chandelier/BC84023-3L BK 2.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  87: {
    name: 'BC84023-3L GD',
    description: 'Product 87 - BC84023-3L GD',
    images: [
      '/images/lights/chandelier/BC84023-3L GD.jpg',
      '/images/lights/chandelier/BC84023-3L GD.jpg',
      '/images/lights/chandelier/BC84023-3L GD.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  88: {
    name: 'BC84023-6R GD',
    description: 'Product 88 - BC84023-6R GD',
    images: [
      '/images/lights/chandelier/BC84023-6R GD.jpg',
      '/images/lights/chandelier/BC84023-6R GD.jpg',
      '/images/lights/chandelier/BC84023-6R GD.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  89: {
    name: 'BC84023-7 BK',
    description: 'Product 89 - BC84023-7 BK',
    images: [
      '/images/lights/chandelier/BC84023-7 BK.jpg',
      '/images/lights/chandelier/BC84023-7 BK.jpg',
      '/images/lights/chandelier/BC84023-7 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  90: {
    name: 'BX84012-7 BK 1040X480X310',
    description: 'Product 90 - BX84012-7 BK 1040X480X310',
    images: [
      '/images/lights/chandelier/BX84012-7 BK 1040X480X310.png',
      '/images/lights/chandelier/BX84012-7 BK 1040X480X310.png',
      '/images/lights/chandelier/BX84012-7 BK 1040X480X310.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  91: {
    name: 'CA17533-61 BK',
    description: 'Product 91 - CA17533-61 BK',
    images: [
      '/images/lights/chandelier/CA17533-61 BK.png',
      '/images/lights/chandelier/CA17533-61 BK.png',
      '/images/lights/chandelier/CA17533-61 BK.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  92: {
    name: 'CA17533-61 GD',
    description: 'Product 92 - CA17533-61 GD',
    images: [
      '/images/lights/chandelier/CA17533-61 GD.png',
      '/images/lights/chandelier/CA17533-61 GD.png',
      '/images/lights/chandelier/CA17533-61 GD.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  93: {
    name: 'CB8693-3 (D800+D600+D400mm) H1200mm LED 87w 2835 led, materails Aluminum+ACrylic',
    description:
      'Product 93 - CB8693-3 (D800+D600+D400mm) H1200mm LED 87w 2835 led, materails Aluminum+ACrylic',
    images: [
      '/images/lights/chandelier/CB8693-3 (D800+D600+D400mm) H1200mm LED 87w 2835 led, materails Aluminum+ACrylic .JPG',
      '/images/lights/chandelier/CB8693-3 (D800+D600+D400mm) H1200mm LED 87w 2835 led, materails Aluminum+ACrylic .JPG',
      '/images/lights/chandelier/CB8693-3 (D800+D600+D400mm) H1200mm LED 87w 2835 led, materails Aluminum+ACrylic .JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  94: {
    name: 'CB8693-5(D800+D700+D600+D500+D400) LED 97w 2835 led, materails Aluminum+ACrylic',
    description:
      'Product 94 - CB8693-5(D800+D700+D600+D500+D400) LED 97w 2835 led, materails Aluminum+ACrylic',
    images: [
      '/images/lights/chandelier/CB8693-5(D800+D700+D600+D500+D400) LED 97w 2835 led, materails Aluminum+ACrylic .JPG',
      '/images/lights/chandelier/CB8693-5(D800+D700+D600+D500+D400) LED 97w 2835 led, materails Aluminum+ACrylic .JPG',
      '/images/lights/chandelier/CB8693-5(D800+D700+D600+D500+D400) LED 97w 2835 led, materails Aluminum+ACrylic .JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  95: {
    name: 'CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal',
    description:
      'Product 95 - CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal',
    images: [
      '/images/lights/chandelier/CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal.png',
      '/images/lights/chandelier/CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal.png',
      '/images/lights/chandelier/CB8730B-3 Pendant Light D350 H1200mm LED 24W Aluminum+acrylic+crystal.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  96: {
    name: 'CN8020-1000',
    description: 'Product 96 - CN8020-1000',
    images: [
      '/images/lights/chandelier/CN8020-1000.JPG',
      '/images/lights/chandelier/CN8020-1000.JPG',
      '/images/lights/chandelier/CN8020-1000.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  97: {
    name: 'CN8020-600',
    description: 'Product 97 - CN8020-600',
    images: [
      '/images/lights/chandelier/CN8020-600.jpg',
      '/images/lights/chandelier/CN8020-600.jpg',
      '/images/lights/chandelier/CN8020-600.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  98: {
    name: 'LC83001-4',
    description: 'Product 98 - LC83001-4',
    images: [
      '/images/lights/chandelier/LC83001-4.jpg',
      '/images/lights/chandelier/LC83001-4.jpg',
      '/images/lights/chandelier/LC83001-4.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  99: {
    name: 'LC83007',
    description: 'Product 99 - LC83007',
    images: [
      '/images/lights/chandelier/LC83007.JPG',
      '/images/lights/chandelier/LC83007.JPG',
      '/images/lights/chandelier/LC83007.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  100: {
    name: 'LD10733-2',
    description: 'Product 100 - LD10733-2',
    images: [
      '/images/lights/chandelier/LD10733-2.JPG',
      '/images/lights/chandelier/LD10733-2.JPG',
      '/images/lights/chandelier/LD10733-2.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  101: {
    name: 'LD10733-3',
    description: 'Product 101 - LD10733-3',
    images: [
      '/images/lights/chandelier/LD10733-3.JPG',
      '/images/lights/chandelier/LD10733-3.JPG',
      '/images/lights/chandelier/LD10733-3.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  102: {
    name: 'LD6805-400+200',
    description: 'Product 102 - LD6805-400+200',
    images: [
      '/images/lights/chandelier/LD6805-400+200.jpg',
      '/images/lights/chandelier/LD6805-400+200.jpg',
      '/images/lights/chandelier/LD6805-400+200.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  103: {
    name: 'LD6805-6',
    description: 'Product 103 - LD6805-6',
    images: [
      '/images/lights/chandelier/LD6805-6.png',
      '/images/lights/chandelier/LD6805-6.png',
      '/images/lights/chandelier/LD6805-6.png',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  104: {
    name: 'LD8802-200',
    description: 'Product 104 - LD8802-200',
    images: [
      '/images/lights/chandelier/LD8802-200.JPG',
      '/images/lights/chandelier/LD8802-200.JPG',
      '/images/lights/chandelier/LD8802-200.JPG',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  105: {
    name: 'LD9045',
    description: 'Product 105 - LD9045',
    images: [
      '/images/lights/chandelier/LD9045.jpg',
      '/images/lights/chandelier/LD9045.jpg',
      '/images/lights/chandelier/LD9045.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  106: {
    name: 'LP3196-4 BK',
    description: 'Product 106 - LP3196-4 BK',
    images: [
      '/images/lights/chandelier/LP3196-4 BK.jpg',
      '/images/lights/chandelier/LP3196-4 BK.jpg',
      '/images/lights/chandelier/LP3196-4 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  107: {
    name: 'LP3196-4 GD',
    description: 'Product 107 - LP3196-4 GD',
    images: [
      '/images/lights/chandelier/LP3196-4 GD.jpg',
      '/images/lights/chandelier/LP3196-4 GD.jpg',
      '/images/lights/chandelier/LP3196-4 GD.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  108: {
    name: 'LPC1205-3',
    description: 'Product 108 - LPC1205-3',
    images: [
      '/images/lights/chandelier/LPC1205-3.jpg',
      '/images/lights/chandelier/LPC1205-3.jpg',
      '/images/lights/chandelier/LPC1205-3.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  109: {
    name: 'LPC14195',
    description: 'Product 109 - LPC14195',
    images: [
      '/images/lights/chandelier/LPC14195.jpg',
      '/images/lights/chandelier/LPC14195.jpg',
      '/images/lights/chandelier/LPC14195.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  110: {
    name: 'LPD17500R-46 BK',
    description: 'Product 110 - LPD17500R-46 BK',
    images: [
      '/images/lights/chandelier/LPD17500R-46 BK.jpg',
      '/images/lights/chandelier/LPD17500R-46 BK.jpg',
      '/images/lights/chandelier/LPD17500R-46 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  111: {
    name: 'LPD17500R-5 BK',
    description: 'Product 111 - LPD17500R-5 BK',
    images: [
      '/images/lights/chandelier/LPD17500R-5 BK.jpg',
      '/images/lights/chandelier/LPD17500R-5 BK.jpg',
      '/images/lights/chandelier/LPD17500R-5 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  112: {
    name: 'LPD17530-23 BK',
    description: 'Product 112 - LPD17530-23 BK',
    images: [
      '/images/lights/chandelier/LPD17530-23 BK.jpg',
      '/images/lights/chandelier/LPD17530-23 BK.jpg',
      '/images/lights/chandelier/LPD17530-23 BK.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  113: {
    name: 'LPD17530-7 2',
    description: 'Product 113 - LPD17530-7 2',
    images: [
      '/images/lights/chandelier/LPD17530-7 2.jpg',
      '/images/lights/chandelier/LPD17530-7 2.jpg',
      '/images/lights/chandelier/LPD17530-7 2.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
  114: {
    name: 'LPD17530-7',
    description: 'Product 114 - LPD17530-7',
    images: [
      '/images/lights/chandelier/LPD17530-7.jpg',
      '/images/lights/chandelier/LPD17530-7.jpg',
      '/images/lights/chandelier/LPD17530-7.jpg',
    ],
    tag: 'New Arrivals',
    addDate: '09/29/2025',
  },
};

export const categoriesData = {
  ceilingLight: [1, 2, 3, 4, 5, 6, 7],
  chandelier: [
    69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
    88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
    105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  ],
  islandLights: [8, 9, 10, 11, 12, 13, 14, 15],
  outdoorWallLight: [16, 17, 18, 19, 20, 21, 22],
  vanityLight: [
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
  ],
  wallLights: [54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68],
};
