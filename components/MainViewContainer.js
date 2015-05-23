var React = require('react-native');
var styles = require('./styles');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');
var ToEditItem = require('./ToEditItem');
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
	//  console.log('mainViewContainer did mount');
	  TodoStore.addChangeListener(this._onChange);
	},
	componentWillUnmount:function(){
	//  console.log('mainViewContainer will unmount');
	  TodoStore.removeChangeListener(this._onChange);
	},

	getInitialState:function(){
	  return _getTodoState();
	},

	componentWillMount: function() {
	//	console.log("mainViewContainer will mount");
	    this.dataSource = new ListView.DataSource({
	      rowHasChanged: (row1, row2) => row1 !== row2
	    });
	  },

	 _onLongPress: function(rowData, rowId) {
	    AlertIOS.alert(
	      'Delete?',
	      null,
	      [
	        {text: 'Delete', onPress: () => this._deleteItem(rowId)},
	        {text: 'Cancel'},
	      ]
	    )
 	 },

 	 _deleteItem:function(rowId){
 	 	TodoActions.deleteItem(rowId);
 	 },



	_openItem:function(rowData,rowId){
		//console.log("onPressed !!!!!!!!!!!!!!"+rowData.text);
		 this.props.navigator.push({
		      title: "Edit Event",
		      component: ToEditItem,
		      passProps:{item:rowData,rowId:rowId}
		  });


	},


	_renderRow:function(rowData:string,sectionId:number,rowId:number){
		var item = rowData;
		var sign = '';
		console.log("the render row is "+item.text);
		console.log("the complete is " +item.complete)
		if (item.complete) {
			sign = "√"; 
		};
		return(
			<View style={styles.todoListItemContainer}>
				<TouchableHighlight
					  style={styles.touchableHighlight}
			          onPress={() => this._openItem(rowData,rowId)}
			          onLongPress={this._onLongPress}>
			            <Text style={styles.todoListItemText}>
			              {item.text}
			            </Text>   
	        	</TouchableHighlight>
	          	<Text style={styles.checkbox}>
	          	  {sign}
	          	</Text>
	        </View>
			
			);
	},

	render:function(){
		//console.log("mainViewContainer render");
		var dataSource = this.dataSource.cloneWithRows(this.state.todos)
		return(
	    	<View style={styles.mainViewContainer}>
			 	<ListView 
			 		dataSource ={dataSource}
			 		renderRow ={this._renderRow}/>
	    	 <Footer />
	       </View>
	       
			);

	},


	//callback from the TodoStore
	  _onChange:function(){

    this.setState(_getTodoState());
    
  }




});

module.exports = TodoListContainer;
