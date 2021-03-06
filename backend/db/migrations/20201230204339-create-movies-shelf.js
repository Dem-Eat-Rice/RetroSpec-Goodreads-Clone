'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MoviesShelves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.TEXT
      },
      shelfId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Shelves' }
      },
      movieId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Movies' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MoviesShelves');
  }
};