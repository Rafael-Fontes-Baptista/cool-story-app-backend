"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "My travels",
          description: "Some of my stories around the world",
          backgroundColor: "#ff8b3d",
          color: "black",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "My works",
          description: "Some of my stories during my work-life",
          backgroundColor: "#ff9d5c",
          color: "black",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "My hobbies",
          description: "Some of my stories on my hobbies",
          backgroundColor: "#ffaf7a",
          color: "black",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {})
  },
}
