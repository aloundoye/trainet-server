'use strict';

/**
 * formation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::formation.formation');
