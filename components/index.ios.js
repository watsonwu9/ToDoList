/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');
var MainViewContainer = require('./MainViewContainer');
var Footer =require('./Footer');
var ToEditItem = require('./ToEditItem');
var TodoActions = require('../actions/TodoActions');



var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;



var ToDoList = React.createClass({

  componentWillMount:function(){
    console.log('index will mount');
  },

    componentWillUnMount:function(){
    console.log('index will unmount');
  },
    componentDidMount:function(){
    console.log('index did mount');
  },
 
  render: function() {
    console.log('index render');
    // rightButtonTitle: 'Cancel',
    //         onRightButtonPress: () => { 
    //           this.refs.mainNavigator.navigator.pop(); }

    return (
      <NavigatorIOS 
        ref="mainNavigator"
        style={styles.navigatorIOSWrapper}
        initialRoute={{
          component:MainViewContainer,
          title:"To Do List",
          rightButtonTitle:'Add',
          onRightButtonPress:() =>{
            this.refs.mainNavigator.navigator.push({
            title: "Add New Event",
            component: ToEditItem
            
            


            });}
        }} />
    );
  },

});




AppRegistry.registerComponent('ToDoList', () => ToDoList);
