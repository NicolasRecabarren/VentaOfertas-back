import Sequelize from 'sequelize';
import { sequelize } from '../database/connection';

const Role = sequelize.define('roles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
}, {
    timestamps: false
});

export default Role;