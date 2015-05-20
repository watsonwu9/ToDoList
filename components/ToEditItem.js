'use strict';

var React = require('react-native');
var styles = require('./styles');
var TodoActions = require('../actions/TodoActions');
var {
	Text,
	View,
	TouchableHighlight,
  TextInput
}= React;




var toEditItem = React.createClass({
  getInitialState:function(){
    return{
      input: ''
      };
  },

   componentWillMount:function(){
    //console.log('toEditItem will mount');
  },

    componentWillUnMount:function(){
   // console.log('toEditItem will unmount');
  },
    componentDidMount:function(){
    //console.log('toEditItem did mount');
  },
  _updateInputText:function(text){

    this.setState({input:text});
    console.log('you input new things');
  },



  _updateTodo:function(text){
     this.setState({input:text});

     //if nothing was input, keep the original 
     if (this.state.input == '') {
      return;
     };

    if (this.props.item) {
      console.log('lets update the item at Row '+this.props.rowId);
      TodoActions.updateItem(this.state.input,this.props.rowId);
      return;
    }

    if (this.state.input!='') {
      console.log('&&&&&&&'+this.state.input);
      TodoActions.createItem(this.state.input);
      return;
    };
    
  },



  render:function(){
     var item = this.props.item;
     var placeholder = 'go swimming';
    return (
            <View style={styles.toEditItemWrapper}>
              <TextInput
                placeholder={placeholder}
                value={item&&item.text?item.text:''}
                style={styles.textInput} 
                onChangeText={(text) => this._updateInputText(text)} 
                onEndEditing={(text) => this._updateTodo(text)}/>
            </View>      
           );
  }
});
  

module.exports = toEditItem;