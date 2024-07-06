
const { qrCode } = require('../controller/qrGenerator');

const routes = require('express').Router();

routes.post('/qrCode', qrCode);

module.exports = routes;
