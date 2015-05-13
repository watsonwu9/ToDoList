var React = require('react-native');
var styles = require('./styles');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var Header = React.createClass({
	render:function(){
		return(
			<View>
				<Text style={styles.titleText}>TO DOs</Text>
			</View>
			);

	}
});

module.exports = Header;
