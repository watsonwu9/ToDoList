/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');

var Footer =require('./Footer');
var MainContent = require('./MainContent');
var Header = require('./Header');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ToDoList = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Header/>
        <MainContent/>
        <Footer/>
      </View>
    );
  }
});





AppRegistry.registerComponent('ToDoList', () => ToDoList);
