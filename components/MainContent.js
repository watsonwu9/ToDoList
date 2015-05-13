var React = require('react-native');
var styles = require('./styles');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} = React;


var MainContent = React.createClass({
	getInitialState:function(){
		var ds = new ListView.DataSource({rowHasChanged:(r1,r2) =>r1 !==r2});
		return {
			dataSource:ds.cloneWithRows(['row1','row2']),
		};
	},

	_renderRow:function(rowData:string,sectionID:number,rowID:number){
		return(
			
				<View style={styles.row}>
					<Text style={styles.text}>
						{rowData}
					</Text>
				</View>
			);
	},

	_createItem:function(){
		console.log("you create an item in MainContent");
		TodoActions.createItem();



	},

	render:function(){

		return(
		   <View>
			 	<ListView 
			 		style ={styles.listContainer}
			 		dataSource ={this.state.dataSource}
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

module.exports = MainContent;
