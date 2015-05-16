var React = require('react-native');
var styles = require('./styles');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');
var TodoListItem = require('./TodoListItem');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  AlertIOS,
} = React;




var TodoListContainer = React.createClass({

	componentWillMount: function() {
	    this.dataSource = new ListView.DataSource({
	      rowHasChanged: (row1, row2) => row1 !== row2
	    });
	  },

	_AlertMenu:function(rowData,rowID){
		//AlertIOS.alert('you opened item No.'+rowID);
	},

	_openItem:function(rowData,rowID){
		console.log(rowData);
	},


	_renderRow:function(rowData:string,sectionID:number,rowID:number){
		return(
			<TodoListItem 
			 item = {rowData}
			 onPress = {this._openItem(rowData,rowID)}
			 onLongPress = {this._AlertMenu(rowData,rowID)} />
			
			);
	},

	_createItem:function(){
		TodoActions.createItem();




	},

	render:function(){
		var dataSource = this.dataSource.cloneWithRows(this.props.todos)

		return(
		   <View>
			 	<ListView 
			 		style ={styles.listContainer}
			 		dataSource ={dataSource}
			 		renderRow ={this._renderRow}/>

			 	<TouchableHighlight
	          style={styles.button}
	          onPress={this._createItem}>
	            <Text style={styles.buttonText}>+</Text>
	            </TouchableHighlight>
	       </View>
			);

	}




});

module.exports = TodoListContainer;
