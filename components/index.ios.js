/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');
var MainViewContainer = require('./MainViewContainer');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;



var ToDoList = React.createClass({

 
  render: function() {
    return (
      <NavigatorIOS 
        style={styles.navigatorIOSWrapper}
        initialRoute={{
          component:MainViewContainer,
          title:"To Do List",
        }} />
    );
  },

});




AppRegistry.registerComponent('ToDoList', () => ToDoList);
