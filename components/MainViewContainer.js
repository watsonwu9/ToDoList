var React = require('react-native');
var styles = require('./styles');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');
var TodoListItem = require('./TodoListItem');
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

	// _handleNextButtonPress:function(){
	// 	this.props.navigator.pop();
	// },

	componentDidMount:function(){
	  console.log('mainViewContainer did mount');
	  TodoStore.addChangeListener(this._onChange);
	},
	componentWillUnmount:function(){
	  console.log('mainViewContainer will unmount');
	  TodoStore.removeChangeListener(this._onChange);
	},

	getInitialState:function(){
	  return _getTodoState();
	},

	componentWillMount: function() {
		console.log("mainViewContainer will mount");
	    this.dataSource = new ListView.DataSource({
	      rowHasChanged: (row1, row2) => row1 !== row2
	    });
	  },

	_AlertMenu:function(rowData,rowID){
		//AlertIOS.alert('you opened item No.'+rowID);
		console.log('ou opened item No.'+rowID);
	},

	_openItem:function(rowData,rowID){
        // this.props.refs.mainNavigator.navigator.push({
        // title: "Amend Event",
        // component: ToEditItem,
        // passProps: {item: rowData, id: rowID},
        // rightButtonTitle: 'Cancel',
        // onRightButtonPress: () => {this.props.refs.mainNavigator.navigator.pop(); }
        // });
		console.log(this.props);


          
	},


	_renderRow:function(rowData:string,sectionID:number,rowID:number){
		//onLongPress = {this._AlertMenu(rowData,rowID)} />
		return(
			<TodoListItem 
			 item = {rowData}
			 onPress = {this._openItem(rowData,rowID)}/>
			 
			);
	},

	_createItem:function(){
		TodoActions.createItem();

	},

	render:function(){
		console.log("mainViewContainer render");
		var dataSource = this.dataSource.cloneWithRows(this.state.todos)
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

    this.setState(_getTodoState());
    
  }




});

module.exports = TodoListContainer;
