var React = require('react-native');
var styles = require('./styles');
var Footer = require('./Footer');
//var Header = require('./Header');
// var TodoActions = require('../actions/TodoActions');
// var TodoStore = require('../stores/TodoStore');
// var TodoListItem = require('./TodoListItem');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  AlertIOS,
  Navigator,
} = React;




var TodoListContainer = React.createClass({

  // componentWillMount: function() {
	 //    this.dataSource = new ListView.DataSource({
	 //      rowHasChanged: (row1, row2) => row1 !== row2
	 //    });
  // },

 //  _AlertMenu:function(rowData,rowID){
 
 //  },

 //  _openItem:function(rowData,rowID){
 //  	console.log("lets go to open the item");
 //    console.log(rowData);
 //    // this.props.navigator.push({
 //    //   title:rowData && rowData/text || 'New Item',
 //    //   component:ToDoEdit,
 //    //   passProps:{item:rowData,id:rowID,update:this._updateItem}
 //    //});

	
 //  },

 //  _createItem:function(){
 //    TodoActions.createItem();


 //  },


 //  _updateItem: function(item, index){
 //      // var items = this.props.todos;
 //      // if (index) {
 //      //   items[index] = item;
 //      // }
 //      // else {
 //      //   items.push(item);
 //      // }
 //      // this.setState({items: items});
 //      console.log('now you want to close the pop window');

 //      //this.props.navigator.pop();
 //  },

	// _renderRow:function(rowData:string,sectionID:number,rowID:number){
	// 	return(
	// 		<TodoListItem 
	// 		 item = {rowData} />
	// 		 // onPress = {this._openItem(rowData,rowID)}
	// 		 // onLongPress = {this._updateItem(rowData,rowID)} />
			
	// 	);
	// },

	render:function(){
		//var dataSource = this.dataSource.cloneWithRows(this.props.todos);
		var length = this.props.todos;
		return(
		       <Footer/>
			);

	},




});

module.exports = TodoListContainer;
