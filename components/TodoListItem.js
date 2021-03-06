'use strict';

var React = require('react-native');
var styles = require('./styles');
var Footer =require('./Footer');
var {
	Text,
	View,
	TouchableHighlight,
}= React;


var todoListItem = React.createClass({
 
  componentWillMount:function(){
    console.log('todoListItem will mount');
  },

    componentWillUnMount:function(){
    console.log('todoListItem will unmount');
  },
    componentDidMount:function(){
    console.log('todoListItem did mount');
  },

  _onPress:function(item){
    console.log('you pressed '+ item.text);
    // this.props.navigator.push({
    //   title:"Edit Todo",
    //   component:Footer
    // });
    // this.props.navigator.push({
    //   title:
    // })
  },



  render:function(){
    console.log('todoListItem render');

    var item = this.props.item;
    return (
        <TouchableHighlight
          onPress={this._onPress(item)}
          onLongPress={this._onLongPress}>
          <View style={styles.todoListItem}>
            <Text style={styles.todoListItemText}>
              {item.text}
            </Text>
          </View>
        </TouchableHighlight>
    );
    
  }
});
  

module.exports = todoListItem;