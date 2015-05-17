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
    console.log('toEditItem will mount');
  },

    componentWillUnMount:function(){
    console.log('toEditItem will unmount');
  },
    componentDidMount:function(){
    console.log('toEditItem did mount');
  },
  _updateInputText:function(text){
    console.log('_updateInputText called');
    this.setState({input:text});
  },

  _updateTodo:function(){
    console.log('_updateTodo called');
    if (this.state.input !=='') {
      TodoActions.createItem(this.state.input);
    }

  },


  render:function(){
    console.log('toEditItem render');
 

    

    return (
            <View style={styles.toEditItemWrapper}>
              <TextInput
                placeholder='go swimming'
                style={styles.textInput} 
                onChangeText={(text) => this._updateInputText(text)} 
                onEndEditing={this._updateTodo}/>
            <Text style={styles.inputText}>{'user input: ' + this.state.input}</Text>
            </View>

        
      )
  }
});
  

module.exports = toEditItem;