/**
 * ORM configuration.
 *
 * All functions related to prisma ORM
 *
 * @file Prisma configuration.
 * @author Alejandro Amaral <aamaral@taggify.net>
 * @since 1.0.0
 * @module Prisma
 */
const { PrismaClient } = require('@prisma/client');

/**
 * Initialize the connection
 * @memberof module:Prisma
 */
const init = () => {
    // If there isn't a connection create one
    if (!global.db) {
        global.db = new PrismaClient();

        console.info('Prisma client setup ok');
    }
};

/**
 * Get or create a prisma client
 * @memberof module:Prisma
 * @returns {object} Global or new Prisma client
 */
const newPrisma = () => {
    return global.db || new PrismaClient();
};

module.exports = {
    init,
    newPrisma,
};
