var termtorrent = exports;

termtorrent.blessed = require('blessed');

termtorrent.Client = require('node-torrent');
termtorrent.client = new termtorrent.Client();

termtorrent.ui = require('./ui');

Object.keys(termtorrent.ui).forEach(function(key) {
  termtorrent[ key ] = termtorrent.ui[ key ];
});
