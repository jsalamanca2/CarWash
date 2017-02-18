module.exports = function (sequelize, DataTypes) {
	return sequelize.define("Car", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		make: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true, 
				isEmpty: false
			}
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true,
				isEmpty: false
			}
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isNumeric: true,
				isEmpty: false
			}
		},
		color: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true
			}
		}
	})

};