'use strict';
var React = require('react-native');
var { StyleSheet } = React;


var styles = StyleSheet.create({

  navigatorIOSContainer:{
  	flex:1,
  },

   mainViewContainer:{
    flex:1,
    backgroundColor:'#7fccff',//blue
  },

   footer:{
    backgroundColor:'#003d66',
    alignSelf:'stretch',
    height:15,
    
  },

   footerText:{
    fontSize: 12,
    textAlign:'center',
    color:'#ffffff',

    },


  todoListItemContainer:{
	backgroundColor:'#fafbfc',
	height:66,
	borderColor:'#7fccff',//blue
	borderWidth:2,
	flexDirection:'row',
	justifyContent: 'space-between',
   },



   touchableHighlight:{
    flex:14,
    alignSelf:'center',
   },

  checkbox:{
    flex:1,
    textAlign:'right',
    alignSelf:'center',
    marginRight:20,

  },


   todoListItemText:{
    textAlign:'left',
    fontSize:18,
    fontFamily:'georgia',
    padding:20,
  },



  toEditItemContainer:{
    flex:1,
    backgroundColor:'#ffffff',
    justifyContent:'flex-start',
   // alignItems:'center',
  },

  textInput:{
    marginTop:100,
    height: 40, 
    width:300,
    marginLeft:40,
    borderWidth:2,
    borderRadius:5,
    borderColor:'#7fccff',
    padding:5,
    //backgroundColor:'#7fccff',
    
  },

   switchIOS:{
   	marginLeft:40,
    marginTop: 20,
  },


 });

module.exports = styles;