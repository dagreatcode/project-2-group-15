module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        team_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      player_name: {
        type: DataTypes.TEXT
      }, 
      jersey_number: {
          type: DataTypes.INTEGER,
          allowNull: true
      }, 
      season_points: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: true
      }
    });
  
    // Player.associate = function(models) {
      
    //   Player.belongsTo(models.Team, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    // };
  
    return Player;
  };
  

  //add playername 