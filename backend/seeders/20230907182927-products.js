'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('products', [
      {
        name: 'Mesa rectangular',
        shortDescription: 'mesa rectangular para 30 personas',
        description: 'mesa rectangular para 30 personas',
        price: 5000,
        stock: 30,
        category: "Mesas",
        coverImage: 'https://hosdecora.com/blog/wp-content/uploads/2018/03/mesas-catering-744x496.png',
        images: JSON.stringify(['https://hosdecora.com/blog/wp-content/uploads/2018/03/mesas-catering-744x496.png', 'https://reservas.events/wp-content/uploads/2021/06/mesa-madera-para-eventos-elegantes-en-monterrey.jpg']),
        orderId: 0
      },
      {
        name: 'Mesa redonda',
        shortDescription: 'mesa redonda para 10 personas',
        description: 'mesa redonda para 10 personas',
        price: 2000,
        stock: 40,
        category: "Mesas",
        coverImage: 'https://industriaskerosti.com/wp-content/uploads/2022/12/mesas-para-eventos-sociales-en-industrias-kerosti.jpg',
        images: JSON.stringify(['https://industriaskerosti.com/wp-content/uploads/2022/12/mesas-para-eventos-sociales-en-industrias-kerosti.jpg', 'https://vajillaparaeventos.com.ar/img/mesas_y_sillas.jpg']),
        orderId: 0      
      },
      {
        name: 'Silla Tiffany',
        shortDescription: 'silla Tiffany blanca',
        description: 'silla Tiffany blanca',
        price: 1000,
        stock: 1000,
        category: "Sillas",
        coverImage: 'https://industriaskerosti.com/wp-content/uploads/2022/11/sillas-tiffany-industrias-kerosti.jpg',
        images: JSON.stringify(['https://industriaskerosti.com/wp-content/uploads/2022/11/sillas-tiffany-industrias-kerosti.jpg', 'https://vajillaparaeventos.com.ar/img/mesas_y_sillas.jpg', 'https://productoscusan.com/wp-content/uploads/2020/06/silla-tiffany-blanca-la-mejor-opcion-eventos.jpg']),
        orderId: 0
      },
      {
        name: 'Silla Napoleon',
        shortDescription: 'silla Napoleon dorada',
        description: 'silla Napoleon dorada',
        price: 1000,
        stock: 1000,
        category: "Sillas",
        coverImage: 'https://i0.wp.com/www.eventosmilmar.com/wp-content/uploads/2020/01/napole%C3%B3n-dorada-coj%C3%ADn-polipiel.jpg?fit=1051%2C1051&ssl=1',
        images: JSON.stringify(['https://i0.wp.com/www.eventosmilmar.com/wp-content/uploads/2020/01/napole%C3%B3n-dorada-coj%C3%ADn-polipiel.jpg?fit=1051%2C1051&ssl=1', 'https://crimons.com/system/contents/images/product_91_contents_6128_small.jpg?1672232505']),
        orderId: 0
      },
      {
        name: 'Juego de vajilla estándar',
        shortDescription: 'Juego de vajilla estándar que consta de tres platos, tres copas y cubiertos',
        description: 'Juego de vajilla estándar que consta de tres platos, tres copas y cubiertos',
        price: 1000,
        stock: 3000,
        category: "Vajillas",
        coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKfeIqSrt9LGtEjrmchPx7etbTyOmH6rW-A&usqp=CAU',
        images: JSON.stringify(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKfeIqSrt9LGtEjrmchPx7etbTyOmH6rW-A&usqp=CAU']),
        orderId: 0
      },
      {
        name: 'Juego de vajilla premiun',
        shortDescription: 'Juego de premiun estándar que consta de tres platos, tres copas y cubiertos',
        description: 'Juego de premiun estándar que consta de tres platos, tres copas y cubiertos',
        price: 1000,
        stock: 3000,
        category: "Vajillas",
        coverImage: 'https://www.options.es/media/catalog/category/assiettes-V2.jpg',
        images: JSON.stringify(['https://www.options.es/media/catalog/category/assiettes-V2.jpg']),
        orderId: 0
      },
      {
        name: 'Centro de mesa floral',
        shortDescription: 'Centro de mesa floral cuadrado de  40cm por 40cm',
        description: 'Centro de mesa floral cuadrado de  40cm por 40cm',
        price: 1000,
        stock: 3000,
        category: "Otra",
        coverImage: 'https://judithjorda.com/wp-content/uploads/2015/12/1-min-34.jpg',
        images: JSON.stringify(['https://judithjorda.com/wp-content/uploads/2015/12/1-min-34.jpg',]),
        orderId: 0
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});

  }
};
