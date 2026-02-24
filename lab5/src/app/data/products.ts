import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Tablets' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Smartphones' },
  { id: 4, name: 'Headphones' }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Планшет Apple iPad A16 11',
    description: 'This powerful tablet with an 11-inch screen and high resolution will provide you with vivid and clear images.',
    price: 205018,
    rating: 4.9,
    category: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
    likes: 0
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Pad 2 ',
    description: 'This powerful tablet with an 11-inch screen',
    price: 106523,
    rating: 4.8,
    category: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000',
    likes: 0
  },
  {
    id: 3,
    name: 'ThundeRobot 911S Core D 15.6"',
    description: 'High-performance gaming desktop with NVIDIA RTX 4090 and Intel i9',
    price: 496800,
    rating: 5.0,
    category: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium   '],
    link: 'http://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_notebook_desktop&gbraid=0AAAAAC7-v7gtpe572v1C8pzKk2OHYsQVr&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3A2PEQx-pWxnzx7komqA0VM3JbGBu-oD5Xgs3onUXpqCh9aKVCHu_gaAgp_EALw_wcB',
    likes: 0
  },
  {
    id: 4,
    name: 'Apple iPhone 17 Pro Max',
    description: 'Latest flagship smartphone with A19 Bionic chip and titanium design',
    price: 899990,
    rating: 4.9,
    category: 3,
    image: 'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/354/5552195268d3840cd84e5_original.jpg',
    images: ['https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/354/5552195268d3840cd84e5_original.jpg'],
    link: '#',
    likes: 0
  },
  {
    id: 5,
    name: 'Huawei MatePad 11,5 S',
    description: 'Will provide you with vivid and clear images.',
    price: 259000,
    rating: 4.7,
    category: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p34/96173123.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p9a/p34/96173123.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-s-2026-papermatte-podarok-11-5-djuim-12-gb-256-gb-zelenyi-154784583/?c=750000000',
    likes: 0
  },
  {
    id: 6,
    name: 'Valve Steam Machine',
    description: 'high resolution will provide you with vivid images.',
    price: 43990,
    rating: 4.5,
    category: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p19/p0f/45822345.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p19/p0f/45822345.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/haidiko-hk16-pro-max-10-1-djuim-16-gb-512-gb-chernyi-140651648/?c=750000000',
    likes: 0
  },
  {
    id: 7,
    name: 'Apple MacBook Pro M4 Pro',
    description: 'Revolutionary laptop with M4 Pro chip and Liquid Retina XDR display',
    price: 1299990,
    rating: 5.0,
    category: 2,
    image: 'https://gadgetstore.kz/wa-data/public/shop/products/88/11/1188/images/3053/3053.970.jpg',
    images: ['https://gadgetstore.kz/wa-data/public/shop/products/88/11/1188/images/3053/3053.970.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3ru-a-132088460/?srsltid=AfmBOop8xG_S2mYS7zEb1QIFGl6wJK4l1EWyIciQRLQ5Sdy0WqzIISnb',
    likes: 0
  },
  {
    id: 8,
    name: 'Samsung Galaxy Buds3 Pro',
    description: 'No wonder the model has been the standard in the professional audio industry for over 20 years!',
    price: 75990,
    rating: 5.0,
    category: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p37/108495081.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p67/p37/108495081.png?format=gallery-medium'],
    link: '#',
    likes: 0
  },
  {
    id: 9,
    name: 'Sony PS5 Pulse 3D',
    description: 'Color your gaming evenings with the glow of the stars with a stylish headset in black, optimized for 3D sound on the PlayStation 5 console.',
    price: 69490,
    rating: 4.8,
    category: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h4b/64216529010718.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h42/h4b/64216529010718.jpg?format=gallery-medium'],
    link: '#',
    likes: 0
  },
  {
    id: 10,
    name: 'ASUS ROG Strix G15',
    description: 'Gaming laptop with RTX 4060 and AMD Ryzen 9',
    price: 1749990,
    rating: 4.7,
    category: 2,
    image: 'https://i5.walmartimages.com/asr/76004116-f6f2-4283-94b1-71214aa871b6.3fe6c6226f4d36a767ccbdab0fbee289.jpeg',
    images: ['https://i5.walmartimages.com/asr/76004116-f6f2-4283-94b1-71214aa871b6.3fe6c6226f4d36a767ccbdab0fbee289.jpeg'],
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-scar-17-x3d-17-3-32-gb-ssd-1000-gb-win-11-g733pyv-ll045w-90nr0db4-m00480-114122469/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_desktop&gbraid=0AAAAAC7-v7gUl_23VcpHUSeuiJL-xqxTj&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3C4AkD-OzWZDKoz1ikhTnHJmFO-47gNI7g2Q9DUXpWHYXB6d7GgzgQaAmwUEALw_wcB',
    likes: 0
  },
  {
    id: 11,
    name: 'Blackview Tab A6 Kids',
    description: 'Versatile console with vibrant 7-inch OLED screen',
    price: 48300,
    rating: 4.9,
    category: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p8f/pcf/16035229.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p8f/pcf/16035229.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/blackview-tab-a6-kids-10-1-djuim-4-gb-128-gb-goluboi-132246128/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_notebook_desktop&gbraid=0AAAAAC7-v7gtpe572v1C8pzKk2OHYsQVr&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3A2PEQx-pWxnzx7komqA0VM3JbGBu-oD5Xgs3onUXpqCh9aKVCHu_gaAgp_EALw_wcB',
    likes: 0
  },
  {
    id: 12,
    name: 'PRYME N5095',
    description: 'The optimal solution for study and work',
    price: 189900,
    rating: 4.9,
    category: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_notebook_desktop&gbraid=0AAAAAC7-v7gtpe572v1C8pzKk2OHYsQVr&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3A2PEQx-pWxnzx7komqA0VM3JbGBu-oD5Xgs3onUXpqCh9aKVCHu_gaAgp_EALw_wcB',
    likes: 0
  },
  {
    id: 13,
    name: 'MSI Katana 15',
    description: 'Affordable gaming laptop with RTX 4060 and fast refresh rate',
    price: 549990,
    rating: 4.6,
    category: 2,
    image: 'https://storage-asset.msi.com/global/picture/product/product_174521807461ffa4f9c2de564cda2daeac3bf2e6e8.webp',
    images: ['https://storage-asset.msi.com/global/picture/product/product_174521807461ffa4f9c2de564cda2daeac3bf2e6e8.webp'],
    link: 'https://kaspi.kz/shop/p/msi-katana-15-15-6-16-gb-ssd-1000-gb-dos-b13vek-1496xkz-9s7-158571-1496-113822319/',
    likes: 0
  },
  {
    id: 14,
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Snapdragon 8 Gen 3 for Galaxy, AI features, 200MP camera',
    price: 689990,
    rating: 4.9,
    category: 3,
    image: 'https://www.ixbt.com/img/n1/news/2024/0/3/Galaxy-S24-Ultra-official-3%20copy_large.jpg',
    images: ['https://www.ixbt.com/img/n1/news/2024/0/3/Galaxy-S24-Ultra-official-3%20copy_large.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116043556/',
    likes: 0
  },
  {
    id: 15,
    name: 'Apple iPhone 15 Pro',
    description: 'Dynamic Island, 48MP main camera, USB-C',
    price: 369990,
    rating: 4.8,
    category: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZO2XL1o2aklVfsZDjz2oWteOrUovWN5qrEg&s',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZO2XL1o2aklVfsZDjz2oWteOrUovWN5qrEg&s'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128-gb-chernyi-113137790/',
    likes: 0
  },
  {
    id: 16,
    name: 'Redmi A3x',
    description: 'Has the qualities of a true leader in everything',
    price: 53400  ,
    rating: 4.9,
    category: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
    likes: 0
  },
  {
    id: 17,
    name: 'Xiaomi Redmi Note 14 Pro',
    description: 'The advanced 200 MP professional-grade camera offers amazing photo and video shooting capabilities.',
    price: 156700,
    rating: 4.8,
    category: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
    likes: 0
  },
  {
    id: 18,
    name: 'Huawei FreeBuds Pro',
    description: 'No wonder the model has been the standard in the professional audio industry for over 20 years!',
    price: 60000,
    rating: 4.9,
    category: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ped/pde/35108389.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/ped/pde/35108389.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/naushniki-huawei-freebuds-pro-4-zelenyi-136753485/?c=750000000',
    likes: 0
  },
  {
    id: 19,
    name: 'HyperX Cloud II Core ',
    description: 'A premium headset for gamers that provides high-quality sound and comfortable use during long gaming sessions.',
    price: 72456,
    rating: 5.0,
    category: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h64/h6e/83754734190622.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h64/h6e/83754734190622.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-ii-core-chernyi-113298064/?c=750000000',
    likes: 0
  },
  {
    id: 20,
    name: 'Soundcore Liberty 4 PRO',
    description: 'A premium headset for gamers that provides high-quality sound and comfortable use during long gaming sessions.',
    price: 52656,
    rating: 4.8,
    category: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p56/13748724.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p78/p56/13748724.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/naushniki-soundcore-liberty-4-pro-chernyi-131430159/?c=750000000',
    likes: 0
  }
];