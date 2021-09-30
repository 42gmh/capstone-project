module.exports = (sequelize, Sequelize) => {
    const Mario = sequelize.define("marios", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      boots: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      button: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pants: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shirt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      background: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  
    return Mario;
  };