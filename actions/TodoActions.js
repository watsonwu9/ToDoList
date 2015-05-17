var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');



var todoActions = {

	createItem:function(text){
		var payload  = {
			actionType:TodoConstants.TODO_CREATE,
			text:text
		};
		AppDispatcher.handleViewAction(payload);
	
	},

};

module.exports = todoActions;