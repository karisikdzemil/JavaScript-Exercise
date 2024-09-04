const shopItems = [
  // Kategorija: Majice
  {
    name: "Crna Majica",
    price: 1500,
    category: "Majice",
    imageUrl:
      "https://static.mohito.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/0/9/0968U-99X-051-1-595415_10.jpg",
  },
  {
    name: "Bela Majica",
    price: 1400,
    category: "Majice",
    imageUrl:
      "https://www.zastitnaoprema.rs/images/jch-optimize/ng/images_stories_virtuemart_product_resized_gi64000-b__800x800.webp",
  },
  {
    name: "Plava Majica",
    price: 1600,
    category: "Majice",
    imageUrl:
      "https://promostar.rs/files/products/9/7/4/24974/_thumb/24974-20200318104045-5e71ec9df369b-61-430-51-royal-blue-front-medium_jpg.jpg?v=1654850057",
  },
  {
    name: "Majica sa Printom",
    price: 1800,
    category: "Majice",
    imageUrl:
      "https://static.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/4/4/4433X-99X-050-1-708424_1.jpg",
  },

  // Kategorija: Pantalone
  {
    name: "Crne Pantalone",
    price: 2500,
    category: "Pantalone",
    imageUrl:
      "https://remiks.com/media/catalog/product/cache/3a94dccb1b2fbf2ba369a22195785beb/2/1/211w1003-999_6ohiblwdlysri0c3.jpg",
  },
  {
    name: "Trenerka Pantalone",
    price: 2200,
    category: "Pantalone",
    imageUrl:
      "https://www.sportskiribolov.co.rs/image/cache/data/odeca-prluci/pantalone/savage-gear/savage-gear-tec-foam-trenerka-800x800.jpg",
  },
  {
    name: "Farmerke",
    price: 3000,
    category: "Pantalone",
    imageUrl:
      "https://remiks.com/media/catalog/product/cache/3a94dccb1b2fbf2ba369a22195785beb/l/v/lv36200-0236-5_26059.jpg",
  },
  {
    name: "Kargo Pantalone",
    price: 2700,
    category: "Pantalone",
    imageUrl:
      "https://www.mmoc.rs/wp-content/uploads/2015/03/Pantalone-kargo-F-Type-crne.jpg",
  },

  // Kategorija: Jakne
  {
    name: "Kožna Jakna",
    price: 7500,
    category: "Jakne",
    imageUrl: "https://media.yamahabarel.com/2021/06/Held-Sport-1.jpg",
  },
  {
    name: "Zimska Jakna",
    price: 8500,
    category: "Jakne",
    imageUrl:
      "https://zastitnaoprema.rs/images/stories/virtuemart/product/helly-hansen-zimska-jakna-sa-kapuljacom-mjolnir-work-novatex.jpg",
  },
  {
    name: "Prolećna Jakna",
    price: 6000,
    category: "Jakne",
    imageUrl:
      "https://inventofashion.com/wp-content/uploads/2024/03/oleg-khaki-muske-jakne-invento-muska-prolecna-jakna-scaled.jpg",
  },
  {
    name: "Duks Jakna",
    price: 5500,
    category: "Jakne",
    imageUrl:
      "https://www.hornetshop.rs/1357-thickbox_default/duks-jakna-crna-sa-kapuljacom.jpg",
  },

  // Kategorija: Obuća
  {
    name: "Patike",
    price: 4500,
    category: "Obuća",
    imageUrl:
      "https://www.extrasports.com/files/thumbs/files/images/slike_proizvoda/media/DM0/DM0113-100/images/thumbs_800/DM0113-100_800_800px.jpg.webp",
  },
  {
    name: "Čizme",
    price: 7000,
    category: "Obuća",
    imageUrl:
      "https://bpolar.rs/wp-content/uploads/2023/09/A5YKD231_650x650.jpg",
  },
  {
    name: "Sandale",
    price: 3500,
    category: "Obuća",
    imageUrl:
      "https://obucagrazia.rs/images/upload/proizvodi/4836/51006/450_sandale-50602-boja-bela_VujOrK.JPG",
  },
  {
    name: "Papuce",
    price: 2500,
    category: "Obuća",
    imageUrl:
      "https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/2/5/2555Z-80X-001-1-802984.jpg",
  },

  // Kategorija: Aksesoari
  {
    name: "Kačket",
    price: 1200,
    category: "Aksesoari",
    imageUrl:
      "https://www.armyshop.rs/wp-content/uploads/2022/09/kacket-olive-1.jpeg",
  },
  {
    name: "Rukavice",
    price: 1000,
    category: "Aksesoari",
    imageUrl:
      "https://merinoworld.shop/cdn/shop/products/merino-rukavice-820537_1800x1800.jpg?v=1699500100",
  },
  {
    name: "Šal",
    price: 1500,
    category: "Aksesoari",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbKFTGLKLwkGrYQ1IyCnZgKgW0qBX1hbXMw&s",
  },
  {
    name: "Naočare za Sunce",
    price: 3000,
    category: "Aksesoari",
    imageUrl:
      "https://www.minimals.rs/image/cache/catalog/proizvodi/js/c/nb/+0/izipizi-minimals-shop-Image23-c-sun-junior-navy-blue-naocare-za-sunce-650x650.jpg",
  },

  // Kategorija: Torbe
  {
    name: "Ranac",
    price: 5000,
    category: "Torbe",
    imageUrl:
      "https://shopito.rs/wp-content/uploads/2024/01/1-muski-ranac-bange-2809-shopito-by-royalline-6.webp",
  },
  {
    name: "Torbica preko Ramena",
    price: 3500,
    category: "Torbe",
    imageUrl:
      "https://uomo.rs/wp-content/uploads/2024/01/UOMO-Muska-torba-08020-1024x1024-1.jpg",
  },
  {
    name: "Sportska Torba",
    price: 4000,
    category: "Torbe",
    imageUrl:
      "https://www.intersport.rs/media/catalog/product/cache/5864b084779f11fa289096d3dce89f9c//H/S/HS9754_2_HARDWARE_Photography_Front_Side_Lateral_View_white.jpg",
  },
  {
    name: "Elegantna Torba",
    price: 6000,
    category: "Torbe",
    imageUrl:
      "https://ingalanterija.rs/wp-content/uploads/2023/03/polo-xchange-muska-kozna-torba-crna-elegantna2.jpg",
  },
];
console.log(shopItems);
