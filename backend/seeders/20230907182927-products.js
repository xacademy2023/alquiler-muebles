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
        coverImage: 'https://http2.mlstatic.com/D_NQ_NP_945228-MLA53057505557_122022-O.webp',
        images1: 'https://hosdecora.com/blog/wp-content/uploads/2018/03/mesas-catering-744x496.png',
        images2: 'https://www.eventosmilenio.com/wp-content/uploads/2019/12/Mesa-Rectangular-Catering-1.jpg',
        images3: 'https://www.eventosmilenio.com/wp-content/uploads/2019/12/Mesa-Rectangular-Catering-1.jpg',
      },
      {
        name: 'Mesa redonda',
        shortDescription: 'mesa redonda para 10 personas',
        description: 'mesa redonda para 10 personas',
        price: 2000,
        stock: 40,
        category: "Mesas",
        coverImage: 'https://http2.mlstatic.com/D_NQ_NP_928502-MLA69771795181_062023-O.webp',
        images1: 'https://industriaskerosti.com/wp-content/uploads/2022/12/mesas-para-eventos-sociales-en-industrias-kerosti.jpg',
        images2: 'https://industriaskerosti.com/wp-content/uploads/2022/12/mesas-para-eventos-sociales-en-industrias-kerosti.jpg',
        images3: 'https://industriaskerosti.com/wp-content/uploads/2022/12/mesas-para-eventos-sociales-en-industrias-kerosti.jpg',
      },
      {
        name: 'Silla Tiffany',
        shortDescription: 'silla Tiffany blanca',
        description: 'silla Tiffany blanca',
        price: 1000,
        stock: 1000,
        category: "Sillas",
        coverImage: 'https://desillas.com/img/productos/tiffanytransparente45.jpg',
        images1: 'https://industriaskerosti.com/wp-content/uploads/2022/11/sillas-tiffany-industrias-kerosti.jpg',
        images2: 'https://industriaskerosti.com/wp-content/uploads/2022/11/sillas-tiffany-industrias-kerosti.jpg',
        images3: 'https://industriaskerosti.com/wp-content/uploads/2022/11/sillas-tiffany-industrias-kerosti.jpg',
      },
      {
        name: 'Silla Napoleon',
        shortDescription: 'silla Napoleon dorada',
        description: 'silla Napoleon dorada',
        price: 1000,
        stock: 1000,
        category: "Sillas",
        coverImage: 'https://www.cashmeredecoracion.com/media/images/rentman/27974-252frm4_cashmeredeco_548_sil047.jpg',
        images1: 'https://i0.wp.com/www.eventosmilmar.com/wp-content/uploads/2020/01/napole%C3%B3n-dorada-coj%C3%ADn-polipiel.jpg?fit=1051%2C1051&ssl=1',
        images2: 'https://i0.wp.com/www.eventosmilmar.com/wp-content/uploads/2020/01/napole%C3%B3n-dorada-coj%C3%ADn-polipiel.jpg?fit=1',
        images3: 'https://i0.wp.com/www.eventosmilmar.com/wp-content/uploads/2020/01/napole%C3%B3n-dorada-coj%C3%ADn-polipiel.jpg?fit=1',
      },
      {
        name: 'Juego de vajilla estándar',
        shortDescription: 'Juego de vajilla estándar',
        description: 'Juego de vajilla estándar que consta de tres platos, tres copas y cubiertos',
        price: 1000,
        stock: 3000,
        category: "Vajillas",
        coverImage: 'https://http2.mlstatic.com/D_NQ_NP_640465-MLA51600729642_092022-O.webp',
        images1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKfeIqSrt9LGtEjrmchPx7etbTyOmH6rW-A&usqp=CAU',
        images2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKfeIqSrt9LGtEjrmchPx7etbTyOmH6rW-A&usqp=CAU',
        images3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKfeIqSrt9LGtEjrmchPx7etbTyOmH6rW-A&usqp=CAU',
      },
      
      {
        name: 'Centro de mesa floral',
        shortDescription: 'Centro de mesa floral cuadrado',
        description: 'Centro de mesa floral cuadrado de  40cm por 40cm',
        price: 1000,
        stock: 3000,
        category: "Otra",
        coverImage: 'https://i.pinimg.com/originals/66/77/4f/66774facfc14133e225424f91378fffc.png',
        images1: 'https://judithjorda.com/wp-content/uploads/2015/12/1-min-34.jpg',
        images2: 'https://judithjorda.com/wp-content/uploads/2015/12/1-min-34.jpg',
        images3: 'https://judithjorda.com/wp-content/uploads/2015/12/1-min-34.jpg',
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});

  }
};
