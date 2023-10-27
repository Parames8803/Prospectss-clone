module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    paranoid: true
  });

  return Role;
};
