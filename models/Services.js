module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Service", {
    id: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	autoIncrement: true,
    	primaryKey: true,
    }
    serviceName: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validation: {
    		isAlpha: true,
    		isEmpty: false
    	}
    }
    price: {
    	type: DataTypes.DECIMAL(4, 2),
    	allowNull: false,
    	validation: {
    		isNumeric: true,
    		isEmpty: false
    	}
    }
    serviceCode: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	validation: {
    		isNumeric: true, 
    		isEmpty:false
    	}
    }
  }
}