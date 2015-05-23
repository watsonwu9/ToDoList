'use strict';

var React = require('react-native');
var styles = require('./styles');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');
var {
	Text,
	View,
	TouchableHighlight,
  TextInput,
  SwitchIOS,
}= React;




var toEditItem = React.createClass({
  getInitialState:function(){
    return{
      input: '',
      complete:this.props.item?this.props.item.complete:false,
      };
  },

   componentWillMount:function(){

  },

    componentWillUnMount:function(){

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
  _switchTodo:function(){
    console.log('switchIOS touch');
    var current = this.state.complete;
    this.setState({complete:!current});
    TodoActions.switchItem(this.props.rowId);

  },

  // this.setState({complete:this.props.item.complete});

 

  render:function(){
     var item = this.props.item;
     //var rowId = this.props.rowId;
     var placeholder = 'go swimming';
    return (
            <View style={styles.toEditItemContainer}>
              <TextInput
                placeholder={placeholder}
                value={item&&item.text?item.text:''}
                style={styles.textInput} 
                onChangeText={(text) => this._updateInputText(text)} 
                onEndEditing={(text) => this._updateTodo(text)}/>
              <SwitchIOS
                style={styles.switchIOS}
                onTintColor='#7fccff'
                onValueChange={() => this._switchTodo()}
                value={this.state.complete} />

            </View>      
           );
  }
});
  

module.exports = toEditItem;