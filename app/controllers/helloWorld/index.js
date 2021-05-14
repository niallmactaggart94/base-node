
/**
 * @file
 * @module Hello World controller
 * @description Will simply return an object
 */

const express = require('express');
const controller = require('./helloWorld.controller');

const router = express.Router();

/**
 * @name route GET
 * @function
 * @description Requests for the hello world function will be sent to the controller
 * @param "/" {string} Route that following functions will be applied to
 */
router.get('/',

  controller.helloWorld);

module.exports = router;
