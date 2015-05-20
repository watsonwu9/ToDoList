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
      complete:false,
      };
  },

   componentWillMount:function(){
     TodoStore.addChangeListener(this._onChange);
    //console.log('toEditItem will mount');
  },

    componentWillUnMount:function(){
     TodoStore.removeChangeListener(this._onChange);
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
  _switchTodo:function(value){
    console.log('switchIOS touch');
    TodoActions.switchItem();

  },

  _onChange:function(){
    console.log('you change the complete status');

   // this.setState({complete:this.props.item.complete});

 },

  render:function(){
     var item = this.props.item;
     var rowId = this.props.rowId;
     var placeholder = 'go swimming';
    return (
            <View style={styles.toEditItemWrapper}>
              <TextInput
                placeholder={placeholder}
                value={item&&item.text?item.text:''}
                style={styles.textInput} 
                onChangeText={(text) => this._updateInputText(text)} 
                onEndEditing={(text) => this._updateTodo(text)}/>
              <SwitchIOS
                style={styles.switchIOS}
                onValueChange={() => this._switchTodo({rowId})}
                value={this.state.complete} />

            </View>      
           );
  }
});
  

module.exports = toEditItem;