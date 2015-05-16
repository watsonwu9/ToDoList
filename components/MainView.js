/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');

var Footer =require('./Footer');
var TodoListContainer = require('./TodoListContainer');
var Header = require('./Header');
var TodoStore = require('../stores/TodoStore');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
} = React;

function _getTodoState() {
  return {
    todos:TodoStore.getAll()
  };
};


var MainView = React.createClass({

  componentDidMount:function(){
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount:function(){
    TodoStore.removeChangeListener(this._onChange);
  },

  getInitialState:function(){
    return _getTodoState();
  },

  _onChange:function(){
    console.log(this.state.todos);
    console.log('_onChange called ');
    this.setState(_getTodoState());
    console.log(this.state.todos);
  },


  render: function() {
   console.log(this.state.todos.length);
   console.log(this.state.todos);
    return(

      <NavigatorIOS
        initialRoute={{
          component:TodoListContainer,
          title:"To Do List",
          //passProps:{numberOfTodos:length},
        }} />

      );
  },

});



module.exports = MainView;
