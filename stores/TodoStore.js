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
var _todos = [
        {text: 'buy some milk', complete:true},
        {text: 'watch a movie', complete:false}
    ];

function _updateItem(text,rowId){
  console.log('you want to update new item');

  //   var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todos[rowId].text=text;
    
}




function _createItem(text){
    console.log('you want to create new item');

  //   var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todos.push({
      text: text,
      complete: false
    });
}

function _deleteItem(rowId){
  console.log('you want to delete '+rowId);
  _todos.splice(rowId,1);

}

function _switchItem(rowId){
  var current = _todos[rowId].complete;
  _todos[rowId].complete = !current;
}



var TodoStore = merge(EventEmitter.prototype,{

  emitChange:function(){
  	console.log('emit send');
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
  	console.log('addChangeListener added');
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
	      console.log("create actions render in TodoStore");
	      _createItem(action.text);
	      break;

      case TodoConstants.TODO_UPDATE:
        console.log("update actions render in TodoStore");
        _updateItem(action.text,action.rowId);
        break;

      case TodoConstants.TODO_DELETE:
        _deleteItem(action.rowId);
        break;

      case TodoConstants.TODO_SWITCH:
        _switchItem(action.rowId);
        break;

	    default:
	    	return true;
	  }
	  TodoStore.emitChange();
  }),

  getAll:function(){
  	return _todos;
  }

})


module.exports = TodoStore;
