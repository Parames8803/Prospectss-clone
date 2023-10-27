module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    u_user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    u_user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    u_user_pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    u_status: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otpExpiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    u_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    paranoid: true
  });

  return User;
};
