'use strict';
var React = require('react-native');
var { StyleSheet } = React;


var styles = StyleSheet.create({
 
  container: {
    marginTop:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  listContainer:{
     height:300,
   },

  row: {
  // flexDirection: 'row',
  // justifyContent: 'center',
  width:200,
  padding: 10,
  backgroundColor: '#F6F6F6',
  },

  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },

  thumb: {
    width: 64,
    height: 64,
  },

   button: {
    height: 36,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

   buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },



  text: {
    flex: 1,
  },

  titleText: {
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold',
  },
});

module.exports = styles;