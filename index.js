const JSONWebSocket = require('ws');

JSONWebSocket.Server = require('./lib/server');
JSONWebSocket.Schema = require('./lib/schema');

module.exports = JSONWebSocket;