'use strict';
var React = require('react-native');
var { StyleSheet } = React;


var styles = StyleSheet.create({
 
  navigatorIOSWrapper:{
    flex:1,
  },

  mainViewContainer:{
    justifyContent:'space-between',
    height:677,
  },

  
  footer:{
    backgroundColor:'#d3d8e3',
    alignSelf:'center',
    height:25,
    width:375,

  },

  footerText:{
    fontSize: 12,
    textAlign:'center',
  },
  

  todoListItem:{
    backgroundColor:'#fafbfc',
    height:60,
    width:375,
    borderColor:'#48BBEC',
    borderWidth:3,
    alignSelf: 'center',
    justifyContent: 'center',

  },

   todoListItemText:{
    textAlign:'center',
    fontSize:18,
    fontFamily:'georgia',

   },

   button: {
    height: 35,
    width:50,
    backgroundColor: '#48BBEC',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding:10,
  },

   buttonText: {
    fontSize: 25,
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