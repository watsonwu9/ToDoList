/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');
var MainView = require('./MainView');



var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
} = React;

var ToDoList = React.createClass({
  render: function() {
    return (
     <MainView />
    );
  },
});




AppRegistry.registerComponent('ToDoList', () => ToDoList);
