import Sequelize from 'sequelize';
import {sequelize} from '../database/connection';

import Product from './Product';

const ProductImage = sequelize.define('product_images', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: Sequelize.TEXT
    },
    url: {
        type: Sequelize.TEXT
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: false});

ProductImage.belongsTo( Product, {foreignKey: 'product_id'} );

export default ProductImage;