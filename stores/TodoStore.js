/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */


var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = "change";

var _todos = {};

function _createItem(payload){
  console.log('you want to create new item');

  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: 'learn react native'
  };

}



var TodoStore = merge(EventEmitter.prototype,{

  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

	// Register callback to handle all updates
  dispatcherIndex:AppDispatcher.register(function(payload) {
  	  var action = payload.action;
	  switch(action.actionType) {
	    case TodoConstants.TODO_CREATE:
	      console.log("actions render in TodoStore");
	      _createItem(payload);
	      break;

	    default:
	    	return true;
	  }
	  TodoStore.emitChange();
  })

})


module.exports = TodoStore;
