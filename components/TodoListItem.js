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

  _onPress:function(){
    console.log('you pressed '+this.props.item.text);
    // this.props.navigator.push({
    //   title:"Edit Todo",
    //   component:Footer
    // });
  },



  render:function(){
    console.log('todoListItem render');

    var item = this.props.item;
    return (
        <TouchableHighlight
          onPress={this._onPress}
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