var ui = exports;

var blessed = require('blessed');

var termtorrent = require('./');

ui.start = function( callback ) {
  var screen = blessed.screen({
    autoPadding: true,
    fastCSR: true,
    log: process.env.HOME + '/.termtorrent/debug.ui.log'
  });

  termtorrent.screen = screen;

  screen._.target = null;

  screen._.wrapper = blessed.box({
    parent: screen,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  });

  screen._.bar = blessed.listbar({
    parent: screen._.wrapper,
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    keys: true,
    mouse: true,
    autoCommandKeys: true
  });

  var tabs = screen._.tabs = {};

  ['overview'].forEach(function(name) {
    var tab = tabs[name] = blessed.box({
      top: 2,
      left: 0,
      right: 0,
      bottom: 0
    });
  });

  (function self() {
    return screen.render();
  });

}


ui.main = function(callback) {
  return ui.start(function(err) {
    if (err) return callback(err);
    return callback();
  });

} 
