var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');



var todoActions = {
	updateItem:function(text,rowId){
		var payload ={
			actionType:TodoConstants.TODO_UPDATE,	
			text:text,
			rowId:rowId
		};
		AppDispatcher.handleViewAction(payload);
	},

	createItem:function(text){
		var payload  = {
			actionType:TodoConstants.TODO_CREATE,
			text:text
		};
		AppDispatcher.handleViewAction(payload);
	
	},

};

module.exports = todoActions;