var React = require('react-native');
var styles = require('./styles');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var Footer = React.createClass({
	render:function(){
		return(
			<Text style={styles.Welcome}>Welcome to Chongqing</Text>
			);

	}
});

module.exports = Footer;
