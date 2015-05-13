var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');



var todoActions = {

	createItem:function(){
		var payload  = {
			actionType:TodoConstants.TODO_CREATE
		};
		AppDispatcher.handleViewAction(payload);
	
	},

};

module.exports = todoActions;