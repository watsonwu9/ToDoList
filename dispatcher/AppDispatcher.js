/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */


//var AppDispatcher = require('flux').Dispatcher;
var Dispatcher = require('./dispatcher.js');
var merge = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function(payload){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: payload
    });
  }
});

module.exports = AppDispatcher;

