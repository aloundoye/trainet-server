'use strict';

/**
 * inscription service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inscription.inscription');
