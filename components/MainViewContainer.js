var React = require('react-native');
var styles = require('./styles');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');
var TodoListItem = require('./TodoListItem');
var Footer =require('./Footer');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  AlertIOS,
} = React;

function _getTodoState() {
  return {
    todos:TodoStore.getAll()
  };
};


var TodoListContainer = React.createClass({

	componentDidMount:function(){
	  TodoStore.addChangeListener(this._onChange);
	},
	componentWillUnmount:function(){
	  TodoStore.removeChangeListener(this._onChange);
	},

	getInitialState:function(){
	  console.log("get getInitialState");
	  return _getTodoState();
	},

	componentWillMount: function() {
		console.log("will mount");
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
		var dataSource = this.dataSource.cloneWithRows(this.state.todos)
		console.log("show me dataSource");
		console.log(dataSource);
		//contentContainerStyle={styles.listview}
		return(
	    	<View style={styles.mainViewContainer}>
			 	<ListView 
			 		
			 		dataSource ={dataSource}
			 		renderRow ={this._renderRow}/>

			 	<TouchableHighlight
	          style={styles.button}
	          onPress={this._createItem}>
	            <Text style={styles.buttonText}>+</Text>
	            </TouchableHighlight>
	    	 <Footer />
	       </View>
	       
			);

	},

	  _onChange:function(){
    console.log(this.state.todos);
    console.log('_onChange called ');
    this.setState(_getTodoState());
    console.log(this.state.todos);
  }




});

module.exports = TodoListContainer;
