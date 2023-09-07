'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('products', [
        {
          name: 'Mesa rectangular',
          description: 'mesa rectangular para 30 personas',
          price: 5000,
          image:'https://hosdecora.com/blog/wp-content/uploads/2018/03/mesas-catering-744x496.png',
          stock: 30, 
          createdAt: new Date(),
          updatedAt: new Date(),
          idCategory: 1
        },
        {
          name: 'Mesa redonda',
          description: 'mesa redonda para 10 personas',
          price: 2000,
          image:'https://industriaskerosti.com/wp-content/uploads/2022/12/mesas-para-eventos-sociales-en-industrias-kerosti.jpg',
          stock: 40, 
          createdAt: new Date(),
          updatedAt: new Date(),
          idCategory: 1
        },
        {
          name: 'Silla Tiffany',
          description: 'silla Tiffany blanca',
          price: 1000,
          image:'https://industriaskerosti.com/wp-content/uploads/2022/11/sillas-tiffany-industrias-kerosti.jpg',
          stock: 1000, 
          createdAt: new Date(),
          updatedAt: new Date(),
          idCategory: 2
        },
        {
          name: 'Silla Napoleon',
          description: 'silla Napoleon dorada',
          price: 1000,
          image:'https://i0.wp.com/www.eventosmilmar.com/wp-content/uploads/2020/01/napole%C3%B3n-dorada-coj%C3%ADn-polipiel.jpg?fit=1051%2C1051&ssl=1',
          stock: 1000, 
          createdAt: new Date(),
          updatedAt: new Date(),
          idCategory: 2
        },
        {
          name: 'Juego de vajilla estándar',
          description: 'Juego de vajilla estándar que consta de tres platos, tres copas y cubiertos',
          price: 1000,
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKfeIqSrt9LGtEjrmchPx7etbTyOmH6rW-A&usqp=CAU',
          stock: 3000, 
          createdAt: new Date(),
          updatedAt: new Date(),
          idCategory: 3
        },
        {
          name: 'Juego de vajilla premiun',
          description: 'Juego de premiun estándar que consta de tres platos, tres copas y cubiertos',
          price: 1000,
          image:'https://www.options.es/media/catalog/category/assiettes-V2.jpg',
          stock: 3000, 
          createdAt: new Date(),
          updatedAt: new Date(),
          idCategory: 3
        },
        {
          name: 'Centro de mesa floral',
          description: 'Centro de mesa floral cuadrado de  40cm por 40cm',
          price: 1000,
          image:'https://judithjorda.com/wp-content/uploads/2015/12/1-min-34.jpg',
          stock: 3000, 
          createdAt: new Date(),
          updatedAt: new Date(),
          idCategory: 4
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  
  }
};
