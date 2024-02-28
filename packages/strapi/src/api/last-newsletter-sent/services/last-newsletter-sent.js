'use strict';

/**
 * last-newsletter-sent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::last-newsletter-sent.last-newsletter-sent');
