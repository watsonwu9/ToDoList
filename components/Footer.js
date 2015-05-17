var React = require('react-native');
var styles = require('./styles');
var Footer =require('./Footer');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var Footer = React.createClass({
	render:function(){
		console.log('render MainView');
		return(
			<View style={styles.footer}>
				<Text style={styles.footerText}>Powered By Yiqixie</Text>
			</View>
			
			 
			
			);

	}
});

module.exports = Footer;
