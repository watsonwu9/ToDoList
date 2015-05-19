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

	// _AlertMenu:function(rowData,rowID){
	// 	//AlertIOS.alert('you opened item No.'+rowID);
	// 	console.log('ou opened item No.'+rowID);
	// },

	_createItem:function(){
		console.log("this.props");
		this.props.navigator.push({
	    title: "Property",
	    component: Footer
	    });
          
	},

	_PressItem:function(rowData){
		console.log("onPressed !!!!!!!!!!!!!!"+rowData.text);
		 this.props.navigator.push({
		      title: "Property",
		      component: ToEditItem,
		      passProps:rowData
		  });


	},


	_renderRow:function(rowData:string,sectionID:number,rowID:number){
		var item = rowData;
		console.log("the render row is "+item.text);
		return(
			<TouchableHighlight
		          onPress={() => this._PressItem(rowData)}
		          onLongPress={this._onLongPress}>
		          <View style={styles.todoListItem}>
		            <Text style={styles.todoListItemText}>
		              {item.text}
		            </Text>
		          </View>
        	</TouchableHighlight>	 
			
			);
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


	//callback from the TodoStore
	  _onChange:function(){

    this.setState(_getTodoState());
    
  }




});

module.exports = TodoListContainer;
