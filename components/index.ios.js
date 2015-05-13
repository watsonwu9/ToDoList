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
} = React;

function _getTodoState() {
  return {
    todos:TodoStore.getAll()
  };
};


var ToDoList = React.createClass({

  componentDidMount:function(){
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount:function(){
    TodoStore.removeChangeListener(this._onChange);
  },

  getInitialState:function(){
    return _getTodoState();
  },

  render: function() {
    // if (Object.keys(this.state.allTodos).length < 1) {
    //   return null;
    // };


    var length = this.state.todos.length;


    return (
      <View style={styles.container}>
        <Header/>
        <TodoListContainer
          todos={this.state.todos}/>
        <Footer/>
        <Text>there are {length} todos</Text>
      </View>
    );
  },
  _onChange:function(){
    console.log(this.state.todos);
    console.log('_onChange called ');
    this.setState(_getTodoState());
    console.log(this.state.todos);
  }
});




AppRegistry.registerComponent('ToDoList', () => ToDoList);
