const Sequelize = require('sequelize');
const db = require('../config/databases');

const Gig = db.define('gig', {
    title: {
        type: Sequelize.STRING,
    },
    technologies: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    budget: {
        type: Sequelize.STRING,
    },
    contact_email: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
    },
    createdAt: {
        type: Sequelize.DATE,
        value: Date.now()
        
    },
    updatedAt: {
        type: Sequelize.DATE,
        values: Date.now()
    },
})

module.exports = Gig;